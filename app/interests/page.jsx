'use client'

import React, { useEffect } from "react";

import BlogBlock from "../(components)/blocks/link-blocks/BlogLinkBlock";
import PhotosLinkBlock from "../(components)/blocks/link-blocks/PhotosLinkBlock";
import GuitarBlogSectionBlocks from "../(components)/blocks/section-blocks/GuitarBlogSectionBlocks";
import PhotographySectionBlock from "../(components)/blocks/section-blocks/PhotographySectionBlock";

function Page() {

    useEffect(() => {
        document.title = "Interests | Chris Centrella";
    }, []);

    return (
        <>
            <p className="section-title zero-margin">Interests</p>
            <GuitarBlogSectionBlocks />
            <BlogBlock />
            <PhotographySectionBlock />
            <PhotosLinkBlock />
        </>
    );
}

export default Page;
