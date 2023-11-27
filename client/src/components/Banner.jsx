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
                    <h2>Introduction</h2>
                    <p>
                        Welcome to my personal website! Among other things, I enjoy web development as a side hobby.
                        I sought out to build this website for one main reason: I really wanted more
                        experience with React and backends. Computer Science is fun, but I really like to test the 
                        concepts I learn in the classroom in more real-world settings. I wanted to really experience
                        the full-stack development process.
                    </p>
                    <h2> My Vision </h2>
                    <p>
                        This website will be limited to my personal enjoyment and hobbies, as well as some articles and
                        reviews that I plan to organize in here. I mostly want this to be a personal archive of all of the
                        things I enjoy doing in a day-to-day. {/*If you're here for my professional work, please check out <insertlink> */}
                    </p>
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
