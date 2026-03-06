import React, { Component } from "react";
import { Helmet } from "react-helmet-async";
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
        <Helmet>
          <title>Ivan Neto | Software Engineer & CS Alumni - UC Riverside</title>
          <meta name="description" content="Ivan Neto's personal website. Software Engineer and UC Riverside Computer Science alumni. Explore projects, tutorials, cybersecurity writeups, and more." />
          <link rel="canonical" href="https://ivanneto.dev" />
          <script type="application/ld+json">{`
                        {
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Person",
                                    "name": "Ivan Neto",
                                    "url": "https://ivanneto.dev",
                                    "jobTitle": "Software Engineer",
                                    "alumniOf": {
                                        "@type": "CollegeOrUniversity",
                                        "name": "University of California, Riverside"
                                    },
                                    "sameAs": [
                                        "https://github.com/ivanneto02",
                                        "https://www.linkedin.com/in/ivan-neto-0a6a681b0/"
                                    ]
                                },
                                {
                                    "@type": "WebSite",
                                    "name": "Ivan Neto",
                                    "url": "https://ivanneto.dev"
                                }
                            ]
                        }
                    `}</script>
        </Helmet>
        {/* <div className="inner"> */}
        <Header />

        <div className="content">
          {/* Contains the introductory information of the Homepage.
				    It shows what I want to accomplish and what my website is
				    about. */}
          <section id="banner">
            <div id="banner_content">
              <h1>Ivan Neto</h1>
              <p className="banner-subtitle">Software Engineer &middot; UC Riverside Alumni</p>
              <p>Full-stack developer who builds things to learn by doing.</p>
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
