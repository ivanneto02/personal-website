import React, { Component } from "react"

import Avatar from "./Avatar";

import "../styles/Header.css"

class Header extends Component {
    render() {
        return (
            <header id="header">
                <ul className="icons">
                    <li><a href="https://docs.google.com/document/d/1jAV2I_vfuYwBs0TQp1K_vSsTDDuy1b4_SeKbBFXEaEc/edit?usp=sharing" className="icon fa-file"> Resume<span className="label">Resume</span></a></li>
                    <li><a href="https://www.linkedin.com/in/ivan-neto/" className="icon brands fa-linkedin"> Linkedin<span className="label">Linkedin</span></a></li>
                </ul>
                <Avatar/>
            </header>
        )
    }
}

export default Header;
