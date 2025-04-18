import React, { Component } from "react";
import Header from "@components/Header";

import MDXContent from "./test.mdx";

import { MarkdownSection, RelevantArticles } from "@components";

class MarkdownTest extends Component {
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

export default MarkdownTest;
