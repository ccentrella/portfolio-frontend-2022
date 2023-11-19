import React from 'react';
import Link from "next/link";
import {getAuthor, getDate, getTime} from "@/utilities/post";

const BlogPostHeader = ({post}) => {
    return (
        <section className="post-header">
            <div className="post-header-top">
                <Link
                    className="posts-back-icon"
                    href="/blog"
                    title="View All Articles">
                    <i className="icon left-arrow medium"></i>
                </Link>
                <h1>{post.title}</h1>
            </div>
            <div className="post-header-bottom">
                <div className="post-details">
                    <p>
                        <i className="calendar large"></i> {getDate(post)}
                    </p>
                    <p>
                        <i className="clock large"></i> {getTime(post)}
                    </p>
                </div>
            </div>
            <div className="post-header-additional container">
                <div className="center">
                    <p className="post-author button-label">
                        <i className="person large"></i> {getAuthor(post)}
                    </p>
                </div>
                <p className="post-description">{post.description}</p>
            </div>
        </section>
    );
};

export default BlogPostHeader;