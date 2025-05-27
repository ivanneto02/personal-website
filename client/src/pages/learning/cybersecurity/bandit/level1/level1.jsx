import React, { Component } from "react";
import Header from "@components/Header";
import { MarkdownSection, RelevantArticles, MainFooter } from "@components";

import MDXContent from "./level1.mdx";

class level1 extends Component {
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

export default level1;
