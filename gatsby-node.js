exports.createPages = async function ({actions, graphql}) {
    const {data} = await graphql(`query AllBlogPages {
          allMarkdownRemark {
            nodes {
              frontmatter {
                date
                lang
                slug
                title
              }
              html
            }
          }
        }`)

    const postsPerLanguage = new Map();
    createPostsPages(data.allMarkdownRemark.nodes, postsPerLanguage, actions.createPage);
    createBlogIndexPages(postsPerLanguage, actions.createPage);
}

function createPostsPages(data, postsPerLanguage, createPage) {
    data.forEach(node => {
        const {slug, lang, title, date} = node.frontmatter;

        if (!postsPerLanguage.has(lang)) {
            postsPerLanguage.set(lang, []);
        }

        postsPerLanguage.get(lang).push({title, date, slug})

        createPage({
            path: `/${lang}/blog/${slug}`,
            component: require.resolve('./src/templates/blog-template.jsx'),
            context: {slug: slug, lang: lang}
        })
    })
}

function createBlogIndexPages(postsPerLanguage, createPage) {
    for (let lang of postsPerLanguage.keys()) {
        const posts = postsPerLanguage.get(lang);
        posts.sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            }

            if (a.date > b.date) {
                return -1;
            }

            return 0;
        })

        createPage({
            path: `/${lang}/blog/`,
            component: require.resolve('./src/templates/blog-index-template.jsx'),
            context: {lang, posts}
        })
    }
}
