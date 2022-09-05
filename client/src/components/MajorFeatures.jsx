import React, { Component } from "react"
import styled from "styled-components"

class MajorFeatures extends Component {
    render() {
        return (
            <section>
                <header className="major">
                    <h2>Main Aspects of my Website</h2>
                </header>
                <div className="features">
                    <article>
                        <span className="icon solid fa-gamepad"></span>
                        <div className="content">
                            <h3>Minecraft adventures</h3>
                            <p>Here I will talk about the various types of games and adventures that I undergo as a Minecraft player. Some of the servers that I frequently play on are Manacube and Hypixel. Sometimes I will play MunchyMC for some PVP action, though that is very limited.</p>
                        </div>
                    </article>
                    <article>
                        <span className="icon solid fa-rocket"></span>
                        <div className="content">
                            <h3>Freelance work</h3>
                            <p>Recently, I have become interested in doing freelance work for others. Thus, in this section I will talk about the various types of projects that I undergo as a freelance programmer. My focuses in freelance are Data Analysis and Fullstack development. Though, I have a long way to go!</p>
                        </div>
                    </article>
                    <article>
                        <span className="icon solid fa-mug-hot"></span>
                        <div className="content">
                            <h3>Research Work</h3>
                            <p>My focus in Computer Science is mainly Data Science and Data Analysis. In particular, I am very interested in applications of Machine Learning and Data Mining for Natural Language Processing tasks that help humans in their daily tasks.</p>
                        </div>
                    </article>
                    <article>
                        <span className="icon solid fa-user"></span>
                        <div className="content">
                            <h3>Personal Blog</h3>
                            <p>Aside from the Computer Science career, I also juggle my personal life! Here I will post any updates I have on anything that I want to share about my personal life. This will include travel, hobbies, and other (maybe?) tech related endeavours that I partake in.</p>
                        </div>
                    </article>
                </div>
            </section>
        )
    }
}

export default MajorFeatures;
