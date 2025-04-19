import React from "react";

const FooterLink = (props) => {
    return (
        <a href={props.href} className="footerLink" target="_blank" rel="noreferrer">
            <props.icon />
            {props.text}
        </a>
    );
}

export default FooterLink;
