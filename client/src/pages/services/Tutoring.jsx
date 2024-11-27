import React, { Component } from "react";
import Header from "../../components/Header";
import MarkdownSection from "../../components/MarkdownSection";
import { HalfContainer } from "../../components";

import raw1 from "./Tutoring1.md";
import raw2 from "./Tutoring2.md";
import raw3 from "./Tutoring3.md";
import raw4 from "./Tutoring4.md";

import "../../styles/Markdown.css";

class Tutoring extends Component {
    render() {
        return (
            <div id="main">
                    <Header />
            
                    <MarkdownSection raw={raw1}/>

                    {/* Halfsies */}
                    <HalfContainer>
                        <MarkdownSection raw={raw2} />
                        <MarkdownSection raw={raw3} />
                    </HalfContainer>
            
                    <MarkdownSection raw={raw4}/>

            </div>
        );
    }
}

export default Tutoring;