import React from "react"
import { useState } from "react";

const DropDownSection = (props) => {
    const [active, setActive] = useState(false);

    const handleHeaderClick = () => {
        console.log("handling click");
        setActive(!active);
    }

    return (
        <section className={ active ? ("dropDownSection active") : ("dropDownSection") }>
            <div className={ (active ? ("dropDownSectionHeader active") : ("dropDownSectionHeader")) + " emphasis4 dark" } onClick={handleHeaderClick}>
                <span className={active ? ("icon solid fa-minus") : ("icon solid fa-plus") }/>
                <h2>
                    <span>{props.title}</span>
                </h2>
                <i>{active ? ("click to hide") : ("click to expand")}</i>
            </div>
            <div className={ (active ? ("dropDownSectionContent active") : ("dropDownSectionContent")) + " emphasis2 dark"}>
                {props.children}
            </div>
        </section>
    )
}

export default DropDownSection;