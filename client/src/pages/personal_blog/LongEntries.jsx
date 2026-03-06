import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@components/Header";

class LongEntries extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Long Blog Entries | Ivan Neto</title>
                    <meta name="description" content="Long-form blog entries by Ivan Neto. In-depth articles on software engineering, computer science, and personal interests." />
                    <link rel="canonical" href="https://ivanneto.dev/longentries" />
                </Helmet>
                <Header />
                <section>
                    <header className="content">
                        <h1>LongEntries</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default LongEntries;
