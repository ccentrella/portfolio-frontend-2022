'use client'

import React, {useEffect, useState} from "react";
import LinkBlock from "./LinkBlock";
import BlogIcon from "@/icons/article.svg";
import {getLatestPost} from "@/services/blog";

function BlogLinkBlock() {
    const [latestPost, setLatestPost] = useState({title: "", link: ""});

    useEffect(() => {

        getLatestPost()
            .then((post) => setLatestPost({title: post.title, link: "/blog/" + post.slug}))
            .catch(() => setLatestPost({title: 'Failed to Load', link: '/blog'}))

    }, []);

    const links = [
        {
            linkDescription: "View Article",
            linkPath: latestPost.link,
            isExternal: false
        },
        {
            linkDescription: "Blog Homepage",
            linkPath: "/blog",
            isExternal: false
        }
    ];

    return (
        <LinkBlock
            title={"Latest Post: " + latestPost.title}
            icon={BlogIcon}
            links={links}
            expandIcon={true}
        />
    );
}

export default BlogLinkBlock;
