import Introduction from "@/components/resume/Introduction";
import SpecialtiesAndSkills from "@/components/resume/SpecialtiesAndSkills";
import TechnicalKnowledge from "@/components/resume/TechnicalKnowledge";
import Education from "@/components/resume/Education";
import WorkExperience from "@/components/resume/WorkExperience";
import ProjectExperience from "@/components/resume/ProjectExperience";

const Page = () => {
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

export const metadata = {
    title: 'Resume'
}

export default Page;
