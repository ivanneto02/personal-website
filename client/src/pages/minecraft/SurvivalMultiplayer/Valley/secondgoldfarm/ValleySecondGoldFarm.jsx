import React, { Component } from "react";
import Header from "@components/Header";
import MarkdownSection from "@components/MarkdownSection";

import MDXContent from "./ValleySecondGoldFarm.mdx";

class ValleySecondGoldFarm extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <MarkdownSection MDXContent={MDXContent} />
            </div>
        );
    }
}

export default ValleySecondGoldFarm;


