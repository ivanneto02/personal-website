import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@components/Header";

class Pets extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Pets | Ivan Neto</title>
                    <meta name="description" content="Ivan Neto's pets. Stories, photos, and updates about furry companions." />
                    <link rel="canonical" href="https://ivanneto.dev/pets" />
                </Helmet>
                <Header />
                <section>
                    <header className="content">
                        <h1>Pets</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default Pets;
