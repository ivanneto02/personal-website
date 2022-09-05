import React, { Component } from "react"
import styled from "styled-components"

class Contact extends Component {
    render() {
        return (
            <section>
                <header className="major">
                    <h2>Contact Me</h2>
                </header>
                <p>I check my email on a daily basis, almost every hour! Please do not hesistate to contact me if you have any questions or propositions, as I respond very quickly and would love to hear from you!</p>
                <ul className="contact">
                    <li className="icon solid fa-envelope"><a href="mailto:ivan.a.neto@email.ucr.edu">ivan.a.neto@email.ucr.edu</a></li>
                    <li className="icon solid fa-phone">(909) 419-2199</li>
                    <li className="icon solid fa-home"><a href="https://www.google.com/maps/place/Riverside,+CA/">Riverside, California, United States</a></li>
                    <li className="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/ivan-neto/">Linkedin</a><br /></li>
                </ul>
            </section>
        );
    }
}

export default Contact;
