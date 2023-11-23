import ArtisticSectionBlock from "@/components/blocks/section-blocks/ArtisticSectionBlock";
import CompetitiveSectionBlock from "@/components/blocks/section-blocks/CompetitiveSectionBlock";
import DrivenSectionBlock from "@/components/blocks/section-blocks/DrivenSectionBlock";

const Page = () => {
    return (
        <>
            <p className="section-title zero-margin">Highlights</p>
            <CompetitiveSectionBlock />
            <ArtisticSectionBlock />
            <DrivenSectionBlock />
        </>
    );
}

export const metadata = {
    title: 'Highlights'
}

export default Page;
