import React, { Component } from "react"
import styled from "styled-components"

class Header extends Component {
    render() {
        return (
            <header id="header">
                <ul className="icons">
                    <li><a href="https://www.linkedin.com/in/ivan-neto/" className="icon brands fa-linkedin"> Linkedin<span className="label">Linkedin</span></a></li>
                </ul>
            </header>
        )
    }
}

export default Header;
