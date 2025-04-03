import React, { Component } from "react";
import Header from "@components/Header";
import MarkdownSection from "@components/MarkdownSection";

import MDXContent from "./CherryAutoFurnace.mdx";

class CherryAutoFurnace extends Component {
        render() {
                return (
                        <div id="main">
                                <Header />
                                <MarkdownSection MDXContent={MDXContent} />
                        </div>
                );
        }
}

export default CherryAutoFurnace;
