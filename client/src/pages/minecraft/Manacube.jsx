import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@components/Header";

class Manacube extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Manacube Server | Ivan Neto</title>
                    <meta name="description" content="Ivan Neto's Manacube Minecraft server adventures, games, and experiences." />
                    <link rel="canonical" href="https://ivanneto.dev/manacube" />
                </Helmet>
                <Header />
                <section>
                    <header className="content">
                        <h1>Manacube</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default Manacube;
