import React, { Component } from "react";

import Header from "../../components/Header";

class Manacube extends Component {
    render() {
        return (
            <div id="main">
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