import React, { Component } from "react";

import Header from "../../components/Header";

class Pets extends Component {
    render() {
        return (
            <div id="main">
                <div className="inner">
                    <Header />
                    <section>
                        <header className="content">
                            <h1>Pets</h1>
                        </header>
                    </section>
                    
                </div>
            </div>
        );
    }
}

export default Pets;