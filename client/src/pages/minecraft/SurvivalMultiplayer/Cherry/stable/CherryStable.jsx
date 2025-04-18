import React, { Component } from "react";
import Header from "@components/Header";
import { MarkdownSection, RelevantArticles } from "@components";

import MDXContent from "./CherryStable.mdx";

class CherryStable extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <MarkdownSection MDXContent={MDXContent} />
                <RelevantArticles />
            </div>
        );
    }
}

export default CherryStable;
