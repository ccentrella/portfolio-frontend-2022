import ThesisBlock from "@/components/blocks/link-blocks/ThesisLinkBlock";
import UXDesignSectionBlock from "@/components/blocks/section-blocks/UXDesignSectionBlock";
import ArtificialIntelligenceSectionBlock from "@/components/blocks/section-blocks/ArtificialIntelligenceSectionBlock";
import ComputerVisionSectionBlock from "@/components/blocks/section-blocks/ComputerVisionSectionBlock";

const Page = () => {
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

export const metadata = {
    title: 'Specialties'
}

export default Page;
