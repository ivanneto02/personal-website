import React from "react";

const HeaderLink = (props) => {
    return (
        <a href={props.href} className="headerLink" target="_blank" rel="noreferrer">
            <props.icon />
            {props.text}
        </a>
    );
}

export default HeaderLink;

