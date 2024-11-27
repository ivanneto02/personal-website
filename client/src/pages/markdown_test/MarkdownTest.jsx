import React, { Component } from "react";

import Header from "../../components/Header";
import Markdown from "react-markdown";
import raw from './test.md';

class MarkdownTest extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: "# Loading..."
        }
    }

    componentDidMount() {
        fetch(raw).then( (res) => res.text() ).then( (txt) => { this.setState({content: txt});})
    }

    render() {
        return (
            <div id="main">
                    <Header />
                    <section>
                        <header className="content">
                            <Markdown>
                                {this.state.content}
                            </Markdown>
                        </header>
                    </section>
                    
            </div>
        );
    }
}

export default MarkdownTest;