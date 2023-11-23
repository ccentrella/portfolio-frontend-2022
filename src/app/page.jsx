import Hero from "@/components/Hero";
import Highlights from "./highlights/page";
import Specialties from "./specialties/page";
import Interests from "./interests/page";
import WorkExperienceLinkBlock from "@/components/blocks/link-blocks/WorkExperienceLinkBlock";

const Page = () => {
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
