import React from "react";
import Link from 'next/link'

function BlogEntry({post}) {
    return (
        <article className="post-item">
            <h2 className="post-item-title">
                <Link href={"/blog/" + post.slug}>{post.title}</Link>
            </h2>
            <p className="post-item-date">{post.date}</p>
            {post.description && <p className="post-item-description">{post.description}</p>}
        </article>
    );
}

export default BlogEntry;
