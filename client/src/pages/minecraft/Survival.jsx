import React, { Component } from "react";
import Header from "@components/Header";
import { MarkdownSection, RelevantArticles } from "@components";

import MDXContent from "./Survival.mdx";

class Survival extends Component {
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

export default Survival;
