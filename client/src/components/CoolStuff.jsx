import React, { Component } from "react"
import styled from "styled-components"

import MiniPosts from "./MiniPosts"

class CoolStuff extends Component {
    render() {
        return (
            <section>
                <header className="major">
                    <h2>Cool Stuff</h2>
                </header>
                <MiniPosts />
                <ul className="actions">
                    <li><a href="#" className="button">More</a></li>
                </ul>
            </section>
        );
    }
}

export default CoolStuff;
