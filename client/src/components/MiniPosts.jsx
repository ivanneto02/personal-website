import React, { Component } from "react";

class MiniPosts extends Component {
        render() {
                return (
                        <section>
                                <div className="mini-posts">
                                        <article>
                                                <a href="/cs120b" className="image"><img src="https://d3otrhxcw2ss5z.cloudfront.net/videos/cs120b/cs120b_thumbnail.jpg" alt="" /></a>
                                                <p>CS120 Course Content</p>
                                        </article>
                                        <article>
                                                <a href="/laser-engravings" className="image"><img src="https://d3otrhxcw2ss5z.cloudfront.net/miscellaneous/laser_engraving/machine_view2.jpg" alt="" /></a>
                                                <p>Laser Engravings</p>
                                        </article>
                                        <article>
                                                <a href="/survival" className="image"><img src="https://d3otrhxcw2ss5z.cloudfront.net/minecraft/villagers/village.png" alt="" /></a>
                                                <p>Minecraft Survival</p>
                                        </article>
                                </div>
                        </section>
                );
        }
}

export default MiniPosts;
