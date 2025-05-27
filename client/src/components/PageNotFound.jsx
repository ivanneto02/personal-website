import Header from "@components/Header";
import MainFooter from "./MainFooter";

import MDXContent from "./PageNotFound.mdx";
import MarkdownSection from "./MarkdownSection";
import RelevantArticles from "./RelevantArticles";

const PageNotFound = () => {
    return (
        <div id="main">
            <Header />
            <MarkdownSection MDXContent={MDXContent} />
            <RelevantArticles />
            <MainFooter />
        </div>
    );
}

export default PageNotFound;
