import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@components/Header";
import { MarkdownSection, RelevantArticles, MainFooter } from "@components";

import MDXContent from "./Survival.mdx";

class Survival extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Minecraft Survival | Ivan Neto</title>
                    <meta name="description" content="Minecraft survival gameplay and adventures by Ivan Neto. Tips, builds, and experiences from various Minecraft servers." />
                    <link rel="canonical" href="https://ivanneto.dev/survival" />
                </Helmet>
                <Header />
                <MarkdownSection MDXContent={MDXContent} />
                <RelevantArticles />
                <MainFooter />
            </div>
        );
    }
}

export default Survival;
