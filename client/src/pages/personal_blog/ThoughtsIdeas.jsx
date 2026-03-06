import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@components/Header";

class ThoughtsIdeas extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Thoughts & Ideas | Ivan Neto</title>
                    <meta name="description" content="Thoughts and ideas by Ivan Neto. Reflections on technology, software development, and the world." />
                    <link rel="canonical" href="https://ivanneto.dev/thoughtsideas" />
                </Helmet>
                <Header />
                <section>
                    <header className="content">
                        <h1>ThoughtsIdeas</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default ThoughtsIdeas;
