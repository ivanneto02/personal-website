import React, { Component } from "react";

class MiniPosts extends Component {
    render() {
        return (
            <section>
                <div className="mini-posts">
                    <article>
                        <a href="/" className="image"><img src="images/img-placeholder.png" alt="" /></a>
                        <p>Nothing here yet :)</p>
                    </article>
                    <article>
                        <a href="/" className="image"><img src="images/img-placeholder.png" alt="" /></a>
                        <p>Nothing here yet :)</p>
                    </article>
                    <article>
                        <a href="/" className="image"><img src="images/img-placeholder.png" alt="" /></a>
                        <p>Nothing here yet :)</p>
                    </article>
                </div>
            </section>
        );
    }
}

export default MiniPosts;
