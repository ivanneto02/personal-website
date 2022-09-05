import React, { Component } from "react";
import styled from "styled-components";

// import components
import MainContent from "../components/MainContent"
import SideBar from "../components/SideBar"

import "../assets/css/main.css";

// import the pages
import "../pages/"

class App extends Component {
    render() {
        return (
            <div id="wrapper">
                <MainContent />
                <SideBar />
            </div>
        );
    }
}

export default App;
