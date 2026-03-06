import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@components/Header";
import { MarkdownSection, RelevantArticles, MainFooter } from "@components";

import MDXContent from "./LaserEngravings.mdx";

class LaserEngravings extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Laser Engravings | Ivan Neto</title>
                    <meta name="description" content="Laser engraving projects and setups by Ivan Neto. Explore Roomark laser engraving work, designs, and tutorials." />
                    <link rel="canonical" href="https://ivanneto.dev/laser-engravings" />
                </Helmet>
                <Header />
                <MarkdownSection MDXContent={MDXContent} />
                <RelevantArticles />
                <MainFooter />
            </div>
        );
    }
}

export default LaserEngravings;
