import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@components/Header";
import { MarkdownSection, RelevantArticles, MainFooter } from "@components";

import MDXContent from "./Cybersecurity.mdx";

class Cybersecurity extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Cybersecurity | Ivan Neto</title>
                    <meta name="description" content="Cybersecurity content, challenges, and writeups by Ivan Neto. Explore Bandit wargame solutions and security topics." />
                    <link rel="canonical" href="https://ivanneto.dev/cybersecurity" />
                </Helmet>
                <Header />
                <MarkdownSection MDXContent={MDXContent} />
                <RelevantArticles />
                <MainFooter />
            </div>
        );
    }
}

export default Cybersecurity;
