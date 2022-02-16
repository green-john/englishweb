import React from "react"
import Layout from "../components/Layout";
import {graphql} from 'gatsby'

export default function Blog({data}) {
    const {html, frontmatter} = data.markdownRemark;
    const {title, lang, date} = frontmatter
    return <Layout lang={lang}>
        <div className="mt-14 px-4 w-screen flex justify-center">
            <div className="sm:w-5/6 md:w-4/6 lg:w-3/6">
                <h2 className="text-4xl font-bold mb-3 mt-5 sm:mt-10 md:mt-20 lg:mt-25 p-2">{title}</h2>
                <span className="text-sm p-2">{date}</span>
                <div className="blog-content mt-10 p-2">
                    <div dangerouslySetInnerHTML={{ __html: html}}></div>
                </div>
            </div>
        </div>
    </Layout>
}


export const query = graphql`
    query($slug: String!, $lang: String!) {
        markdownRemark(frontmatter: {
            slug: {eq: $slug},
            lang: {eq: $lang}
        }) {
            html
            frontmatter {
                date
                title
            }
        }
    }`
