import React, { useState } from "react";

import styled from "styled-components";

import SearchBar from "./SearchBar";
import Menu from "./Menu";
import CoolStuff from "./CoolStuff";
import Contact from "./Contact";
import Footer from "./Footer";
import SideBarButton from "./SideBarButton";

import "@styles/SideBar.css";

const SideBarDiv = styled.div`
    margin-left: ${props => props.clicked ? "-26em" : "0em"};
`;

const SideBar = () => {
        const [clicked, setClicked] = useState(false);

        function handleClick() {
                setClicked(!clicked);
        }

        return (
                <>
                        <SideBarDiv
                                id="sidebar"
                                clicked={clicked}
                        >
                                <div className="inner">
                                        <SearchBar />
                                        <Menu />
                                        <CoolStuff />
                                        <Contact />
                                </div>
                                <div className="inner">
                                        <Footer />
                                </div>
                        </SideBarDiv>
                        <SideBarButton
                                onClick={handleClick}
                                clicked={clicked}
                        >
                        </SideBarButton>
                </>
        );
}

export default SideBar;
