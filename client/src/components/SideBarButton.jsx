import React from "react";
import styled from "styled-components";

import "../styles/SideBarButton.css";

const Button = styled.a`
    left: ${props => props.clicked ? "0em" : "24em"};
    transform: ${props => props.clicked ? "rotate(0deg)" : "rotate(360deg)"};
`;

// Old code, keep just in case
// Works for button-only movement, not for SideBar
// movement if that makes any sense

// const SideBarButton = () => {
//     const [clicked, setClicked] = useState(false);
//
//     function handleClick() {
//         setClicked(!clicked);
//     }
//
//     return (
//         <Button
//             clicked={clicked}
//             onClick={handleClick}
//             id="toggle_button"
//         >
//         </Button>
//     );
// }

const SideBarButton = props => {
    return (
        <Button
            onClick={props.onClick}
            clicked={props.clicked}
            id="toggle_button"
        >
        </Button>
    );
}


export default SideBarButton;
