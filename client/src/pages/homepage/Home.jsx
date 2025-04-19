import React, { Component } from "react";
import { getImageUrl } from "@utils/images";

// import components
import Header from "@components/Header"
import RelevantArticles from "@components/RelevantArticles"
import { MainFooter } from "../../components";
import { Link } from "react-router-dom";

import "@styles/Home.css"

class Home extends Component {
    render() {
        return (
            <div id="main">
                {/* <div className="inner"> */}
                <Header />

                <div className="content">
                    {/* Contains the introductory information of the Homepage.
				    It shows what I want to accomplish and what my website is
				    about. */}
                    <section id="banner">
                        <div id="banner_image_holder">
                            <img id="banner_image" src={getImageUrl("pfp2.jpg")} alt="" />
                            <div id="banner_image_content">
                                <h2>Ivan Neto</h2>
                                <p>University of California, Riverside - Alumni</p>
                            </div>
                        </div>
                        <div className="content emphasis4 dark" id="banner_content">
                            <h2>Introduction 👀</h2>
                            <p className="card emphasis5 dark">
                                Welcome to my personal website! Among other things, I enjoy web development as a side hobby.
                                I sought out to build this website for one main reason: I really wanted more
                                experience with Full-Stack Development. Computer Science is fun, but I really like to test the
                                concepts I learn in the classroom in more real-world settings. I wanted to really experience the
                                Full-Stack process.
                            </p>
                            <hr></hr>
                            <h2> My Vision 🚀</h2>
                            <h3>For this website</h3>
                            <p className="card emphasis5 dark">
                                My website is a representation of all the web development skills I have learned throughout my career. It includes
                                mostly personal topics like my Minecraft and Hobby projects, as well as some miscellaneous portfolio items. Although it
                                is not meant to showcase my other Software Development skills, inclusions are made for entertainment purposes.
                            </p>
                            <h3>Professionally</h3>
                            <p className="card emphasis5 dark">
                                My vision in this area is that I wish to grow within a company that values applied Machine Learning research to accomplish
                                every day tasks. Examples like Google or Meta come to mind. I wish to be part of their amazing lab experiences, as I have
                                come to know they work on insanely fun and cutting edge projects.
                            </p>
                            <h3>Personally</h3>
                            <p className="card emphasis5 dark">
                                The goal in this area is continual improvement. Shaping most of how I view every day improvements, a Quality Assurance
                                conference I attended back in High School heavily impacted my life. Continual improvement emphasizes discrete steps that we
                                can improve in the workplace to ensure quality in a product. The product in question would be my understanding of Computer
                                Science. Overall, I wish to accomplish small goals every single day that all contribute towards a healthy and balanced life.
                            </p>
                            <hr></hr>
                        </div>
                    </section>

                    {/* This section details the general content that the website has */}
                    <section>
                        <header className="major">
                            <h2>This Website</h2>
                        </header>
                        <div className="features halfgrid">
                            <article>
                                <span className="icon solid fa-gamepad"></span>
                                <div className="content">
                                    <h3>Minecraft adventures</h3>
                                    <p>Here I will talk about the various types of games and adventures that I undergo
                                        as a Minecraft player. Some of the servers that I frequently play on are Manacube and Hypixel.
                                        Sometimes I will play MunchyMC for some PVP action, though that is very limited.</p>
                                </div>
                            </article>
                            <article>
                                <span className="icon solid fa-rocket"></span>
                                <div className="content">
                                    <h3>Freelance work</h3>
                                    <p>Recently, I have become interested in doing freelance work for myself and others. Thus, in this section
                                        I will talk about the various types of projects that I undergo as a freelance programmer.
                                        My focuses in freelance are Data Analysis and Fullstack development. Though, I have a long
                                        way to go!</p>
                                </div>
                            </article>
                            <article>
                                <span className="icon solid fa-mug-hot"></span>
                                <div className="content">
                                    <h3>Research Work</h3>
                                    <p>My focus in Computer Science is mainly Data Science and Data Analysis. In particular, I am very
                                        interested in applications of Machine Learning and Data Mining for Natural Language Processing
                                        tasks that help humans in their daily tasks.</p>
                                </div>
                            </article>
                            <article>
                                <span className="icon solid fa-user"></span>
                                <div className="content">
                                    <h3>Personal Blog</h3>
                                    <p>Aside from the Computer Science career, I also juggle my personal life! Here I will post any updates
                                        I have on anything that I want to share about my personal life. This will include travel, hobbies,
                                        and other (maybe?) tech related endeavours that I partake in.</p>
                                </div>
                            </article>
                        </div>
                    </section>

                    {/* This section details the other content I usually try to upload */}
                    <section>
                        <header className="major">
                            <h2> Other Content</h2>
                        </header>
                        <article>
                            <p>
                                This website contains much more content you can check out in the menu. Articles are written fairly often, and I like to display
                                them. Take a look at the <Link className="highlight" to="/blog">Personal Blog</Link> page to see my blog categories and read some of
                                my work. This blog is only for fun and to flesh out many ideas I have about the world.
                            </p>

                            <p>
                                Also included are my book and movie reviews. While I don't read as much as I should, I really enjoy reading fantasy world books. I include
                                as much as I can about books I have read in the past and currently in the <Link className="highlight" to="/books">Book Reviews</Link> page.
                            </p>
                        </article>
                    </section>

                    {/* This section shows the articles recommended by my article recommendation system*/}
                    <RelevantArticles />
                    <MainFooter />
                </div>

                {/* </div> */}
            </div>
        );
    }
}

export default Home;
