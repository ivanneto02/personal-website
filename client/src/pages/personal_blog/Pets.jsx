import React, { Component } from "react";

import Header from "../../components/Header";

class Pets extends Component {
    render() {
        return (
            <div id="main">
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