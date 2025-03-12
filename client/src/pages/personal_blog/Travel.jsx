import React, { Component } from "react";

import Header from "@components/Header";

class Travel extends Component {
    render() {
        return (
            <div id="main">
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
