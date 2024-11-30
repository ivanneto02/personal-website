import React, { Component } from "react";
import Header from "../../components/Header";
import MarkdownSection from "../../components/MarkdownSection";

import MDXContent from "./Tutoring.mdx";

import "../../styles/Markdown.css";

class Tutoring extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <MarkdownSection MDXContent={MDXContent}/>
            </div>
        );
    }
}

export default Tutoring;