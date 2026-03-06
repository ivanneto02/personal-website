import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@components/Header";

class Travel extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Travel | Ivan Neto</title>
                    <meta name="description" content="Travel experiences and stories by Ivan Neto. Adventures, destinations, and travel tips." />
                    <link rel="canonical" href="https://ivanneto.dev/travel" />
                </Helmet>
                <Header />
                <section>
                    <header className="content">
                        <h1>Travel</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default Travel;
