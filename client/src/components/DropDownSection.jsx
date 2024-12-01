import React, { Children, Component } from "react"
import { useState } from "react";

import MiniPosts from "./MiniPosts"

const DropDownSection = (props) => {
    const [active, setActive] = useState(false);

    return (
        <section className={ active ? ("dropDownSection active") : ("dropDownSection") }>
            <div className="dropDownSectionHeader">
                <h2>
                    {this.props.title}
                </h2>
            </div>
            <div className="dropDownSectionContent">
                {props.children}
            </div>
        </section>
    )
}

export default CoolStuff;
