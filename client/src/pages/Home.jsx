import React, { Component } from "react";
import styled from "styled-components";

// import components
import MainContent from "../components/MainContent"
import SideBar from "../components/SideBar"

import "../assets/css/main.css";

class Home extends Component {
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
