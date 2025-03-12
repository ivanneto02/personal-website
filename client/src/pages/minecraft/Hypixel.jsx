import React, { Component } from "react";

import Header from "@components/Header";

class Hypixel extends Component {
    render() {
        return (
            <div id="main">
                <Header />
                <section>
                    <header className="content">
                        <h1>Hypixel</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default Hypixel;
