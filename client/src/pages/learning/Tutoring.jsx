import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@components/Header";
import { MarkdownSection, RelevantArticles, MainFooter } from "@components";

import MDXContent from "./Tutoring.mdx";

import "@styles/Markdown.css";

class Tutoring extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Tutoring Services | Ivan Neto</title>
                    <meta name="description" content="Tutoring services offered by Ivan Neto. Computer science tutoring and mentoring from a UC Riverside CS alumni." />
                    <link rel="canonical" href="https://ivanneto.dev/tutoring" />
                </Helmet>
                <Header />
                <MarkdownSection MDXContent={MDXContent} />
                <RelevantArticles />
                <MainFooter />
            </div>
        );
    }
}

export default Tutoring;
