require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        title: `English Web`,
        description: `Helping you improve your online presence with language and computer experts.`,
        siteUrl: `https://englishweb.eu`,
        author: `@englishweb`,
    },

    plugins: [{
        resolve: 'gatsby-plugin-google-analytics',
        options: {
            "trackingId": "000"
        }
    }, "gatsby-transformer-remark", "gatsby-plugin-postcss", "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-json", "gatsby-transformer-sharp", {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "images",
            "path": "./src/images/"
        },
        __key: "images"
    }, {
        resolve: 'gatsby-source-filesystem',
        options: {
            "name": "pages",
            "path": "./src/pages/"
        },
        __key: "pages"
    }, {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `assets`,
            path: `${__dirname}/src/assets`,
        },
        __key: 'assets'
    }, {
        resolve: `gatsby-source-filesystem`,
        options: {
            path: `${__dirname}/src/data`,
            name: `dict`,
        },
        __key: 'dict'
    }, {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        // It's important to specify the maxWidth (in pixels) of
                        // the content container as this plugin uses this as the
                        // base for generating different widths of each image.
                        maxWidth: 590,
                    },
                },
            ],
        },
    }
    ]
};
