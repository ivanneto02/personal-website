import React, { Component } from "react";
import Header from "@components/Header";
import MarkdownSection from "@components/MarkdownSection";

import MDXContent from "./SurvivalMultiplayer.mdx";

class SurvivalMultiplayer extends Component {
        render() {
                return (
                        <div id="main">
                                <Header />
                                <MarkdownSection MDXContent={MDXContent} />
                        </div>
                );
        }
}

export default SurvivalMultiplayer;
