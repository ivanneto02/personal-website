import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@components/Header";

class BriefEntries extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Brief Blog Entries | Ivan Neto</title>
                    <meta name="description" content="Brief blog entries by Ivan Neto. Short-form thoughts on software engineering, technology, and life." />
                    <link rel="canonical" href="https://ivanneto.dev/briefentries" />
                </Helmet>
                <Header />
                <section>
                    <header className="content">
                        <h1>BriefEntries</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default BriefEntries;
