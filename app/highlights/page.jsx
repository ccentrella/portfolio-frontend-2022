'use client'

import React, { useEffect } from "react";

import ArtisticSectionBlock from "../(components)/blocks/section-blocks/ArtisticSectionBlock";
import CompetitiveSectionBlock from "../(components)/blocks/section-blocks/CompetitiveSectionBlock";
import DrivenSectionBlock from "../(components)/blocks/section-blocks/DrivenSectionBlock";

function Page() {

    useEffect(() => {
        document.title = "Highlights | Chris Centrella";
    }, []);

    return (
        <>
            <p className="section-title zero-margin">Highlights</p>
            <CompetitiveSectionBlock />
            <ArtisticSectionBlock />
            <DrivenSectionBlock />
        </>
    );
}

export default Page;
