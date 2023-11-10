'use client'

import React, { useEffect } from "react";

import ThesisBlock from "../(components)/blocks/link-blocks/ThesisLinkBlock";
import UXDesignSectionBlock from "../(components)/blocks/section-blocks/UXDesignSectionBlock";
import ArtificialIntelligenceSectionBlock from "../(components)/blocks/section-blocks/ArtificialIntelligenceSectionBlock";
import ComputerVisionSectionBlock from "../(components)/blocks/section-blocks/ComputerVisionSectionBlock";

function Page() {

    useEffect(() => {
        document.title = "Specialties | Chris Centrella";
    }, []);

    return (
        <>
            <p className="section-title zero-margin">Specialties</p>
            <UXDesignSectionBlock />
            <ArtificialIntelligenceSectionBlock />
            <ComputerVisionSectionBlock />
            <ThesisBlock />
        </>
    );
}

export default Page;
