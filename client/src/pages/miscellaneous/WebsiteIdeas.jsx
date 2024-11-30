import React, { Component } from "react";
import Header from "../../components/Header";
import MarkdownSection from "../../components/MarkdownSection";

import raw from "./WebsiteIdeas.md";

class WebsiteIdeas extends Component {
    render() {
        return (
            <div id="main">
                    <Header />
                    <MarkdownSection raw={raw}/>
            </div>
        );
    }
}

export default WebsiteIdeas;