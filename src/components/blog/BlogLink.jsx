import React from "react"
import {GatsbyImage, getImage} from "gatsby-plugin-image"

export default function BlogLink({lang, post}) {
    const {slug, title, date, img} = post
    const image = getImage(img)
    const url = `/${lang}/blog/${slug}`
    return <a href={url} className="rounded block my-6 overflow-hidden shadow-lg">
        {image && <GatsbyImage image={image} alt="header image"/>}

        <div className="px-6 py-4">
            <span className="text-lg font-semibold">{title}</span>
            <span className="text-sm text-gray-700 ml-3">{date}</span>
        </div>

    </a>
}
