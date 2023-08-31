import React, { Component } from "react"
import { Link } from "react-router-dom";

class Banner extends Component {
    render() {
        return (
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Ivan Neto</h1>
                        <p>A Computer Science major at University of California, Riverside</p>
                    </header>
                    <h2> Introduction </h2>
                    <p>
                        Welcome to my personal and professional website! The vision for this website is to
                        collect several aspects of my life together and provide a fun product you can interact with.
                        You can also see professional services I provide, which are meant for me to make a living
                        while pursuing my degree.
                    </p>
                    <h2> Professional Services </h2>
                    <p>
                        I provide <span className="highlight">3</span> main professional services:
                    </p>
                    <ol>
                        <li> Math, writing, and programming <span className="highlight">tutoring</span></li>
                        <li> <span className="highlight">Web development</span> and other freelance projects</li>
                        <li> <span className="highlight">Rideshare</span> driving on your schedule</li>
                    </ol>
                    <p> You can book me on the <Link to="/book" className="highlight">booking page</Link>. Instructions for booking are provided there. </p>
                </div>
                <div>
                    <span className="image object">
                        <img src="images/pfp.jpg" style={{width:"25rem", height:"30rem"}} alt="" />
                    </span>
                </div>
            </section>
        );
    }
}

export default Banner;
