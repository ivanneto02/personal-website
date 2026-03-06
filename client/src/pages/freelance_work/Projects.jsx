import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

import Header from "@components/Header";

class Projects extends Component {
    render() {
        return (
            <div id="main">
                <Helmet>
                    <title>Freelance Projects | Ivan Neto</title>
                    <meta name="description" content="Freelance development projects by Ivan Neto. Data analysis, full-stack web development, and software engineering portfolio." />
                    <link rel="canonical" href="https://ivanneto.dev/projects" />
                </Helmet>
                <Header />
                <section>
                    <header className="content">
                        <h1>Projects</h1>
                    </header>
                </section>
            </div>
        );
    }
}

export default Projects;
