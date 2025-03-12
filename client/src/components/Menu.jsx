import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

import "@styles/Menu.css";

const Menu = () => {
        const [active1, setActive1] = useState(false);
        const [active2, setActive2] = useState(false);
        // const [active3, setActive3] = useState(false);
        const [active4, setActive4] = useState(false);
        const [active5, setActive5] = useState(true);
        const [active6, setActive6] = useState(false);
        const [active7, setActive7] = useState(false);
        const [active8, setActive8] = useState(false);

        return (
                <nav id="menu">
                        <header className="major">
                                <h2>Menu</h2>
                        </header>
                        <ul>
                                <li><Link to="/" id="homepage">Homepage</Link></li>
                                <li>
                                        <span
                                                className={`opener ${active5 ? "active" : ""}`}
                                                onClick={() => setActive5(!active5)}
                                        >Services</span>
                                        <ul id="submenu">
                                                <li><Link to="/tutoring">Tutoring</Link></li>
                                                { /* <li><Link to="/development">Development</Link></li> */}
                                                {/* <li><Link to="/booking">Book me</Link></li> */}
                                        </ul>
                                </li>
                                <li>
                                        <span
                                                className={`opener ${active1 ? "active" : ""}`}
                                                onClick={() => setActive1(!active1)}
                                        >Minecraft</span>
                                        <ul id="submenu">
                                                <li><Link to="/survival/">Personal Survival</Link></li>
                                                <li><Link to="/server/">Survival Multiplayer</Link></li>
                                                <li><Link to="/manacube">Manacube</Link></li>
                                                <li><Link to="/hypixel">Hypixel</Link></li>
                                                {/* <li><Link to="/modsclients">Mods/Clients</Link></li>
                        <li><Link to="/plugins">Plugins/Servers</Link></li>
                        <li><Link to="/visuals">Visuals</Link></li> */}
                                        </ul>
                                </li>
                                <li>
                                        <span
                                                className={`opener ${active2 ? "active" : ""}`}
                                                onClick={() => setActive2(!active2)}
                                        >Projects</span>
                                        <ul id="submenu">
                                                <li><Link to="/projects">Coming soon</Link></li>
                                                {/* <li><Link to="/clientstories">Client Stories</Link></li> */}
                                                {/* <li><Link to="/tipsandtricks">Tips and Tricks</Link></li> */}
                                                {/* <li><Link to="/monetaryanalysis">Monetary Analysis</Link></li> */}
                                        </ul>
                                </li>
                                <li>
                                        <span
                                                className={`opener ${active8 ? "active" : ""}`}
                                                onClick={() => setActive8(!active8)}>
                                                Videos</span>
                                        <ul id="submenu">
                                                <li><Link to="/cs120b">CS120B</Link></li>
                                        </ul>
                                </li>
                                {/* <li>
                                        <span
                                                className={`opener ${active3 ? "active" : ""}`}
                                                onClick={() => setActive3(!active3)}
                                        >Personal Blog</span>
                                        <ul id="submenu">
                                                <li><Link to="/blog">Coming soon</Link></li>
                                                <li><Link to="/briefentries">Brief entries</Link></li>
                                                <li><Link to="/longentries">Long entries</Link></li>
                                                <li><Link to="/thoughtsideas">Thoughts/Ideas</Link></li>
                                                <li><Link to="/travel">Travel</Link></li>
                                                <li><Link to="/pets">Pets</Link></li>
                                        </ul>
                                </li >*/}
                                <li>
                                        <span
                                                className={`opener ${active6 ? "active" : ""}`}
                                                onClick={() => setActive6(!active6)}
                                        >Research</span>
                                        <ul id="submenu">
                                                <li><Link to="/research">Coming soon</Link></li>
                                        </ul>
                                </li>
                                <li>
                                        <span
                                                className={`opener ${active7 ? "active" : ""}`}
                                                onClick={() => setActive7(!active7)}
                                        >Reviews</span>
                                        <ul id="submenu">
                                                <li><Link to="/books">Coming soon</Link></li>
                                                {/* <li><Link to="/movies">Movies</Link></li> */}
                                                {/* <li><Link to="/anime">Anime</Link></li> */}
                                        </ul>
                                </li>
                                <li>
                                        <span
                                                className={`opener ${active4 ? "active" : ""}`}
                                                onClick={() => setActive4(!active4)}
                                        >Miscellaneous</span>
                                        <ul id="submenu">
                                                <li><Link to="/websiteideas">Website Ideas</Link></li>
                                                <li><Link to="/mdtest">Markdown Test</Link></li>
                                                <li><Link to="/homepage">Coming soon</Link></li>
                                        </ul>
                                </li>
                        </ul >
                </nav >
        );
}

export default Menu;
