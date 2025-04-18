import React from "react";

import Menu from "./Menu";
import { SearchBar } from "@components";

import "@styles/SideBarMobile.css";

const SideBarMobile = () => {
    return (
        <div className="sideBarMobile">
            <SearchBar />
            <Menu />
        </div>
    );
}

export default SideBarMobile;
