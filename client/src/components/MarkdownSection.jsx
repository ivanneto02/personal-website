import React, { Component } from "react";
import { MDXProvider } from "@mdx-js/react";
import OptimizedImage from "./OptimizedImage";
import SmartLink from "./SmartLink";
import MarkdownImageContext from "./MarkdownImageContext";

/*
Holds the setup for making MDX content available to the pages, without needing to specify
that each markdown section is of "wholeMarkdownSection" class. It helps because I don't want to
specify to include a new section every time within each page. I may find a simpler setup later on.
*/
class MarkdownSection extends Component {
        render() {
                return (
                        <section className="wholeMarkdownSection">
                                <header className="content">
                                        <MarkdownImageContext.Provider value={true}>
                                                <MDXProvider components={{ a: SmartLink, img: OptimizedImage }}>
                                                        {<this.props.MDXContent />}
                                                </MDXProvider>
                                        </MarkdownImageContext.Provider>
                                </header>
                        </section>
                );
        }
}

export default MarkdownSection;
