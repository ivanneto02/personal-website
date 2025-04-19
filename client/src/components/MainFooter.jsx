import React from "react";
import { FooterLink } from "@components";
import { FaAws, FaCode, FaCss3, FaFile, FaGithub, FaJs, FaLinkedin, FaReact } from "react-icons/fa6";
import { IoMdSchool } from "react-icons/io";
import { SiNetlify, SiMdx } from "react-icons/si";
import { MdEmail, MdHouse } from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";

const MainFooter = () => {
    return (
        <div className="mainFooter">
            <footer className="footerGrid">
                <div>
                    <h3>Tech Stack</h3>
                    <div>
                        <FooterLink href={"https://aws.amazon.com/"} icon={FaAws} text={"Amazon Web Services"} />
                        <FooterLink href={"https://react.dev/"} icon={FaReact} text={"react.dev"} />
                        <FooterLink href={"https://en.wikipedia.org/wiki/CSS"} icon={FaCss3} text={"CSS"} />
                        <FooterLink href={"https://www.oracle.com/developer/javascript/"} icon={FaJs} text={"Javascript"} />
                        <FooterLink href={"https://www.netlify.com"} icon={SiNetlify} text={"Netlify"} />
                        <FooterLink href={"https://mdxjs.com/"} icon={SiMdx} text={"mdxjs.com"} />
                    </div>
                </div>
                <div>
                    <h3>Contact</h3>
                    <div>
                        <FooterLink href={"mailto:ivan.a.neto@hotmail.com"} icon={MdEmail} text={"ivan.a.neto@hotmail.com"} />
                        <FooterLink href={"https://www.google.com/maps/place/Riverside,+CA/"} icon={MdHouse} text={"Riverside, CA, USA"} />
                        <FooterLink href={"https://www.ucr.edu/"} icon={IoMdSchool} text={"UC Riverside"} />
                        <FooterLink href={"https://www1.cs.ucr.edu/"} icon={RiComputerFill} text={"Computer Science"} />
                    </div>
                </div>
                <div>
                    <h3>Other Work</h3>
                    <div>
                        <FooterLink href={"https://www.linkedin.com/in/ivan-neto/"} icon={FaLinkedin} text={"Linkedin"} />
                        <FooterLink href={"https://docs.google.com/document/d/1WJInUWfr5vqFRe2XMcU9oozOaHX8jTv-4adBut4mvHQ/edit?usp=sharing"} icon={FaFile} text={"Resume"} />
                        <FooterLink href={"https://github.com/ivanneto02"} icon={FaGithub} text={"Github"} />
                        <FooterLink href={"https://portfolio.ivanneto.dev"} icon={FaCode} text={"Portfolio Website"} />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default MainFooter;
