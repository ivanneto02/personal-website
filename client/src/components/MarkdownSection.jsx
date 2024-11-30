import React, { lazy, Component, Suspense } from 'react';

const MDXContent = lazy(() => importMDX('../pages/markdown_test/Test2.mdx'));

import { MDXProvider } from "@mdx-js/react";

import { importMDX } from "mdx.macro";

class MarkdownSection extends Component {
    render() {
        return (
            <MDXProvider>
                <MDXContent/>
            </MDXProvider>
        );
    }
}

export default MarkdownSection;