import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@components/Header";

class Hypixel extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Hypixel Server | Ivan Neto</title>
                    <meta name="description" content="Ivan Neto's Hypixel Minecraft server adventures, games, and experiences." />
                    <link rel="canonical" href="https://ivanneto.dev/hypixel" />
                </Helmet>
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
