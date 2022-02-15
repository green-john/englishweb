import React from "react"
import Layout from "../components/Layout";
import PostLink from "../components/blog/BlogLink";

export default function BlogIndex({pageContext}) {
    const {lang, posts} = pageContext

    return <Layout lang={lang}>
        <div className="mt-14 w-screen px-6 py-4 flex justify-center">
            <div className="sm:w-5/6 md:w-4/6 lg:w-3/6 sm:mt-5 md:mt-10">
                {posts.map(post => (<PostLink lang={lang} post={post} key={post.slug}/>))}
            </div>
        </div>
    </Layout>
}
