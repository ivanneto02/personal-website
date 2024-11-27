import React, { Component } from "react"

import "../styles/Markdown.css";

class HalfContainer extends Component {
    render() {
        return (
            <div className="halfContainer">
                <div className="emphasis4 dark halfMarkdownSection">
                    {this.props.children[0]}
                </div>
                <div className="emphasis4 dark halfMarkdownSection">
                    {this.props.children[1]}
                </div>
            </div>
        );
    }
}

export default HalfContainer;
