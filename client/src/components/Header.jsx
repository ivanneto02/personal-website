import React, { Component } from "react"

import "@styles/Header.css";

import { FaGithub } from "react-icons/fa";
import { FaHome, FaFile, FaCode, FaLinkedin } from "react-icons/fa";
import { HeaderLink } from "@components";

import SideBarMobile from "./SideBarMobile";

class Header extends Component {
    render() {
        return (
            <>
                <header id="header">
                    <div className="headerLinks">
                        <HeaderLink href={"/"} icon={FaHome} text={"Home"} />
                        <HeaderLink href={"https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing"} icon={FaFile} text={"Resume"} />
                        <HeaderLink href={"https://www.linkedin.com/in/ivan-neto/"} icon={FaLinkedin} text={"Linkedin"} />
                        <HeaderLink href={"https://github.com/ivanneto02"} icon={FaGithub} text={"Github"} />
                        <HeaderLink href={"https://portfolio.ivanneto.dev"} icon={FaCode} text={"Portfolio"} />
                    </div>
                    {/* <Avatar/> */}
                </header>
                <SideBarMobile />
            </>
        )
    }
}

export default Header;
