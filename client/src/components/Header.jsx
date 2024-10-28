import React, { Component } from "react"

import Avatar from "./Avatar";

import "../styles/Header.css"

class Header extends Component {
    render() {
        return (
            <header id="header">
                <ul className="icons">
                    <li><a href="https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing" target="_blank" className="icon fa-file"> Resume<span className="label">Resume</span></a></li>
                    <li><a href="https://www.linkedin.com/in/ivan-neto/" className="icon brands fa-linkedin" target="_blank"> Linkedin<span className="label">Linkedin</span></a></li>
                </ul>
                <Avatar/>
            </header>
        )
    }
}

export default Header;
