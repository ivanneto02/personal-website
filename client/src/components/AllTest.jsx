import React, { Component } from "react"

class AllTest extends Component {
    render() {
        return (
            <div id="wrapper">
					<div id="main">
						<div className="inner">
								<header id="header">
									<ul className="icons">
										<li><a href="https://www.linkedin.com/in/ivan-neto/" className="icon brands fa-linkedin"> Linkedin<span className="label">Linkedin</span></a></li>
									</ul>
								</header>

								<section id="banner">
									<div className="content">
										<header>
											<h1>Ivan Neto</h1>
											<p>A Computer Science major at University of California, Riverside</p>
										</header>
										<p>Welcome to my personal blog. Here, I aim to list, explain, and demo the projects I do for my Computer Science degree and beyond. Also, I will keep all of my information concisely listed here in case you want to contact me! If you happen to come by my website, please leave me an email and tell me what you think about it :)</p>
										<p>For the most part, this website will consist of four different sections of areas I want to talk about: Minecraft, Freelance Work, Research Work, and a small Personal Blog. Please check these out, and let me know if there are any corrections you would like to make. Feel free to reach me on my email, or on my LinkedIn to connect with me!</p>
									</div>
									<span className="image object">
										<img src="images/pfp.jpg" style={{width:"25rem", height:"25rem"}}/>
									</span>
								</section>

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

								<section>
									<header className="major">
										<h2>Relevant Articles</h2>
									</header>
									<div className="posts">
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<h3>Literally empty</h3>
											<p>This will start filling up once I write content.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<h3>Literally empty</h3>
											<p>This will start filling up once I write content.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<h3>Literally empty</h3>
											<p>This will start filling up once I write content.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<h3>Literally empty</h3>
											<p>This will start filling up once I write content.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<h3>Literally empty</h3>
											<p>This will start filling up once I write content.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<h3>Literally empty</h3>
											<p>This will start filling up once I write content.</p>
											<ul className="actions">
												<li><a href="#" className="button">More</a></li>
											</ul>
										</article>
									</div>
								</section>

						</div>
					</div>

					<div id="sidebar">
						<div className="inner">

								<section id="search" className="alt">
									<form method="post" action="#">
										<input type="text" name="query" id="query" placeholder="Search" />
									</form>
								</section>

								<nav id="menu">
									<header className="major">
										<h2>Menu</h2>
									</header>
									<ul>
										<li><a href="index.html">Homepage</a></li>
										<li>
											<span className="opener">Minecraft</span>
											<ul>
												<li><a href="#">Manacube</a></li>
												<li><a href="#">Hypixel</a></li>
												<li><a href="#">Mods/Clients</a></li>
												<li><a href="#">Plugins/Servers</a></li>
											</ul>
										</li>

										<li>
											<span className="opener">Freelance Work</span>
											<ul>
												<li><a href="#">Projects</a></li>
												<li><a href="#">Client Stories</a></li>
												<li><a href="#">Tips and Tricks</a></li>
												<li><a href="#">Monetary Analysis</a></li>
											</ul>
										</li>
										<li>
											<span className="opener">Personal Blog</span>
											<ul>
												<li><a href="#">Brief entries</a></li>
												<li><a href="#">Long entries</a></li>
												<li><a href="#">Thoughts/Ideas</a></li>
												<li><a href="#">Travel</a></li>
												<li><a href="#">Pets</a></li>
											</ul>
										</li>
										<li>
											<span className="opener">Miscellaneous</span>
											<ul>
												<li><a href="#">I don't know yet :)</a></li>
											</ul>
										</li>
									</ul>
								</nav>


								<section>
									<header className="major">
										<h2>Cool Stuff</h2>
									</header>
									<div className="mini-posts">
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<p>Nothing here yet :)</p>
										</article>
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<p>Nothing here yet :)</p>
										</article>
										<article>
											<a href="#" className="image"><img src="images/img-placeholder.png" alt="" /></a>
											<p>Nothing here yet :)</p>
										</article>
									</div>
									<ul className="actions">
										<li><a href="#" className="button">More</a></li>
									</ul>
								</section>


								<section>
									<header className="major">
										<h2>Contact Me</h2>
									</header>
									<p>I check my email on a daily basis, almost every hour! Please do not hesistate to contact me if you have any questions or propositions, as I respond very quickly and would love to hear from you!</p>
									<ul className="contact">
										<li className="icon solid fa-envelope"><a href="mailto:ivan.a.neto@email.ucr.edu">ivan.a.neto@email.ucr.edu</a></li>
										<li className="icon solid fa-phone">(909) 419-2199</li>
										<li className="icon solid fa-home">Riverside, California, United States<br /></li>
									</ul>
								</section>


								<footer id="footer">
									<p className="copyright">&copy; Untitled. All rights reserved. Demo Images: <a href="https://unsplash.com">Unsplash</a>. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
								</footer>

						</div>
					</div>

			</div>
        );
    }
}

export default AllTest;
