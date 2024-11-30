import React, { Component } from "react"

import "../styles/Header.css";

import SideBarMobile from "./SideBarMobile";

class Header extends Component {
    render() {
        return (
            <>
                <header id="header">
                    <ul className="icons">
                        <li><a href="https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing" target="_blank" rel="noreferrer" className="icon fa-file"> Resume<span className="label">Resume</span></a></li>
                        <li><a href="https://www.linkedin.com/in/ivan-neto/" className="icon brands fa-linkedin" target="_blank" rel="noreferrer"> Linkedin<span className="label">Linkedin</span></a></li>
                        <li><a href="https://github.com/ivanneto02" className="icon solid fa-code" target="_blank" rel="noreferrer"> Github<span className="label">GitHub</span></a></li>
                    </ul>
                    {/* <Avatar/> */}
                </header>
                <SideBarMobile/>
            </>
        )
    }
}

export default Header;
