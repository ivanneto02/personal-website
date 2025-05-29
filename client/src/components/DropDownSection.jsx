import React from "react"
import { useState } from "react";

const DropDownSection = (props) => {
    const [active, setActive] = useState(false);

    const handleHeaderClick = () => {
        console.log("handling click");
        setActive(!active);
    }

    // Styled component due to functionality need
    const dropDownContentStyling = {
        height: active ? "100%" : "100%",
        visibility: "visible",
        padding: active ? "2em" : "0",
        borderRadius: active ? "0em" : "1em",
        maxHeight: active ? "1000px" : "0px",
        overflow: active ? "auto" : "hidden",
    };

    return (
        <section className="dropDownSection">
            <div className={(active ? ("dropDownSectionHeader active") : ("dropDownSectionHeader")) + " emphasis4 dark"} onClick={handleHeaderClick}>
                <span className={active ? ("icon solid fa-minus") : ("icon solid fa-plus")} />
                <h2>
                    <span>{props.title}</span>
                </h2>
                <i>{active ? ("click to hide") : ("click to expand")}</i>
            </div>
            <div className="dropDownSectionContent emphasis3 dark" style={dropDownContentStyling}>
                {props.children}
            </div>
        </section>
    )
}

export default DropDownSection;
