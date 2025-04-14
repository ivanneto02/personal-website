import React, { Component } from "react"

import MiniPosts from "./MiniPosts"

class CoolStuff extends Component {
    render() {
        return (
            <section>
                <header className="major">
                    <h2>Cool Stuff</h2>
                </header>
                <MiniPosts />
            </section>
        );
    }
}

export default CoolStuff;
