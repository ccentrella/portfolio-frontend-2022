import React from "react";
import LinkBlock from "./LinkBlock";
import ThesisIcon from "@/icons/article.svg";

function ThesisLinkBlock() {

    const links = [{
        linkDescription: "Read Now",
        linkPath: "/resources/thesis.pdf",
        isExternal: true
    }];

    return (
        <LinkBlock
            title="Senior Thesis"
            icon={ThesisIcon}
            links={links}
        />
    );
}

export default ThesisLinkBlock;
