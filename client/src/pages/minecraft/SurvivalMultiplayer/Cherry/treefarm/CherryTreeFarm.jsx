import React, { Component } from "react";
import Header from "@components/Header";
import MarkdownSection from "@components/MarkdownSection";

import MDXContent from "./CherryTreeFarm.mdx";

class CherryTreeFarm extends Component {
        render() {
                return (
                        <div id="main">
                                <Header />
                                <MarkdownSection MDXContent={MDXContent} />
                        </div>
                );
        }
}

export default CherryTreeFarm;
