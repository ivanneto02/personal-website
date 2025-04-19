import React, { Component } from "react";
import Header from "@components/Header";

import MDXContent from "./test.mdx";

import { MarkdownSection, RelevantArticles, MainFooter } from "@components";

class MarkdownTest extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <MarkdownSection MDXContent={MDXContent} />
                <RelevantArticles />
                <MainFooter />
            </div>
        );
    }
}

export default MarkdownTest;
