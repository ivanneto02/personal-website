import React, { Component } from "react";
import Header from "../../components/Header";
import MarkdownSection from "../../components/MarkdownSection";

import raw from "./test.md";

import Test from "./Test";

class MarkdownTest extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <MarkdownSection/>
            </div>
        );
    }
}

export default MarkdownTest;