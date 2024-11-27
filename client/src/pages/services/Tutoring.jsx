import React, { Component } from "react";
import Header from "../../components/Header";
import MarkdownSection from "../../components/MarkdownSection";

import raw from "./Tutoring.md";

class Tutoring extends Component {
    render() {
        return (
            <div id="main">
                    <Header />
                    <MarkdownSection raw={raw}/>
            </div>
        );
    }
}

export default Tutoring;