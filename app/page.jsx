'use client'

import React, { useEffect } from "react";

import Hero from "@/components/Hero";
import Highlights from "./highlights/page";
import Specialties from "./specialties/page";
import Interests from "./interests/page";
import WorkExperienceLinkBlock from "@/components/blocks/link-blocks/WorkExperienceLinkBlock";

function Page() {
    useEffect(() => {
        document.title = "Welcome to Chris Centrella's Portfolio";
    }, []);

    return (
        <article className="home">
            <section>
                <Hero />
                <WorkExperienceLinkBlock />
            </section>
            <section>
                <Highlights />
            </section>
            <section>
                <Specialties />
            </section>
            <section>
                <Interests />
            </section>
        </article>
    );
}

export default Page;
