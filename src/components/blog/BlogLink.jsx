import React from "react"

export default function BlogLink({lang, post}) {
    const {slug, title, date} = post
    const url = `/${lang}/blog/${slug}`
    return <div className="my-6">
        <a href={url}>
            <span className="text-xl underline">{title}</span>
            <span className="text-sm text-gray-700 ml-3">{date}</span>
        </a>
    </div>
}
