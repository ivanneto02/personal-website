import React, { Component } from "react";
import Header from "../../components/Header";

import MDXContent from "./test.mdx";

import MarkdownSection from "../../components/MarkdownSection";

class MarkdownTest extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <MarkdownSection MDXContent={<MDXContent/>}/>
            </div>
        );
    }
}

export default MarkdownTest;