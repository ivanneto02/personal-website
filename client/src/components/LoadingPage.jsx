import Header from "@components/Header";
import MainFooter from "./MainFooter";

import MDXContent from "./LoadingPage.mdx";
import MarkdownSection from "./MarkdownSection";
import RelevantArticles from "./RelevantArticles";

const LoadingPage = () => {
    return (
        <div id="main">
            <Header />
            <MarkdownSection MDXContent={MDXContent} />
            <RelevantArticles />
            <MainFooter />
        </div>
    );
}

export default LoadingPage;
