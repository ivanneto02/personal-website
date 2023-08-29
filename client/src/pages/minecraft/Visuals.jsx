import React, { Component } from "react";

import Header from "../../components/Header";

class Visuals extends Component {
    render() {
        return (
            <div id="main">
                <div className="inner">
                    <Header />
                    <section>
                        <header className="content">
                            <h1>Visuals</h1>
                        </header>
                    </section>
                </div>
            </div>
        );
    }
}

export default Visuals;