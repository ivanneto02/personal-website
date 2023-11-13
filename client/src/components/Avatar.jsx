import React, { Component } from "react"

import "../styles/Avatar.css"

class Avatar extends Component {
    render() {
        return (
            <div className="avatarHolder">
                <div className="avatar">
                    <div className="avatarCircle">
                        <img id="avatarImage" src="images/avatar_placeholder.png" alt="img"/>
                    </div>
                    <div className="avatarName">
                        Sign up | Log in
                    </div>
                </div>
            </div>
        )
    }
}

export default Avatar;
