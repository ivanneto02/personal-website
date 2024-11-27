import React, { Component } from "react";

import Markdown from "react-markdown";

class MarkdownSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "# Loading..."
        }
    }

    componentDidMount() {
        fetch(this.props.raw).then( (res) => res.text() ).then( (txt) => { this.setState({content: txt})} )
    }

    render() {
        return (
            <section className="wholeMarkdownSection">
                <header className="content">
                    <Markdown>
                        {this.state.content}
                    </Markdown>
                </header>
            </section>
        );
    }
}

export default MarkdownSection;
