import React, { Component } from "react"
import styled from "styled-components"

class Banner extends Component {
    render() {
        return (
            <section id="banner">
                <div className="content">
                    <header>
                        <h1>Ivan Neto</h1>
                        <p>A Computer Science major at University of California, Riverside</p>
                    </header>
                    <p>Welcome to my personal blog. Here, I aim to list, explain, and demo the projects I do for my Computer Science degree and beyond. Also, I will keep all of my information concisely listed here in case you want to contact me! If you happen to come by my website, please leave me an email and tell me what you think about it :)</p>
                    <p>For the most part, this website will test consist of four different sections of areas I want to talk about: Minecraft, Freelance Work, Research Work, and a small Personal Blog. Please check these out, and let me know if there are any corrections you would like to make. Feel free to reach me on my email, or on my LinkedIn to connect with me!</p>
                </div>
                <span className="image object">
                    <img src="images/pfp.jpg" style={{width:"25rem", height:"30rem"}} />
                </span>
            </section>
        );
    }
}

export default Banner;
