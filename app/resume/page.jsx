'use client'

import React, { useEffect } from "react";

import Introduction from "@/components/resume/Introduction";
import SpecialtiesAndSkills from "@/components/resume/SpecialtiesAndSkills";
import TechnicalKnowledge from "@/components/resume/TechnicalKnowledge";
import Education from "@/components/resume/Education";
import WorkExperience from "@/components/resume/WorkExperience";
import ProjectExperience from "@/components/resume/ProjectExperience";

function Page() {

    useEffect(() => {
        document.title = "Resume | Chris Centrella";
    }, []);

    return (
        <article className="resume">
            <Introduction />
            <TechnicalKnowledge />
            <Education />
            <WorkExperience />
            <ProjectExperience />
            <SpecialtiesAndSkills />
        </article>
    );
}

export default Page;
