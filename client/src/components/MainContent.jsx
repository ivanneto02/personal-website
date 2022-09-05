import React, { Component } from "react";
import styled from "styled-components";

// import components
import Header from "./Header";
import Banner from "./Banner";
import MajorFeatures from "./MajorFeatures";
import RelevantArticles from "./RelevantArticles";

class MainContent extends Component {
    render() {
        return (
            <div id="main">
                <div className="inner">
                    <Header />
                    <Banner />
                    <MajorFeatures />
                    <RelevantArticles />
                </div>
            </div>
        );
    }
}

export default MainContent;
