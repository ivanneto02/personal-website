import React, { Component } from "react"

class Contact extends Component {
    render() {
        return (
            <section>
                <header className="major">
                    <h2>Contact Me</h2>
                </header>
                {/* <p>I check my email on a daily basis, almost every hour! Please do not hesistate to contact me if you have any questions or propositions, as I respond very quickly and would love to hear from you!</p> */}
                <ul className="contact">
                    <li className="icon solid fa-envelope"><a href="mailto:ivan.a.neto@hotmail.com" target="_blank" rel="noreferrer">ivan.a.neto@hotmail.com</a></li>
                    <li className="icon solid fa-home"><a href="https://www.google.com/maps/place/Riverside,+CA/" target="_blank" rel="noreferrer">Riverside, California, United States</a></li>
                    <li className="icon brands fa-linkedin"><a href="https://www.linkedin.com/in/ivan-neto/" target="_blank" rel="noreferrer">Linkedin</a><br /></li>
                    <li className="icon fa-file"><a href="https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a><br /></li>
                    <li className="icon solid fa-code"><a href="https://github.com/ivanneto02" target="_blank" rel="noreferrer">Github</a><br /></li>
                </ul>
            </section>
        );
    }
}

export default Contact;
