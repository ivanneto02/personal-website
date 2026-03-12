import React, { Component } from "react"
import OptimizedImage from "./OptimizedImage";

import "@styles/Avatar.css"

class Avatar extends Component {
        render() {
                return (
                        <div className="avatarHolder">
                                <div className="avatar">
                                        <div className="avatarCircle">
                                                <OptimizedImage id="avatarImage" src="images/avatar_placeholder.png" alt="img" loading="eager" wrapperClassName="optimizedImageWrapper--intrinsic" />
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
