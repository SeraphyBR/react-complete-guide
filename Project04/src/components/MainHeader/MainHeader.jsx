import React from "react";
import styled from "styled-components";

import Navigation from "./Navigation";

const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #741188;
    padding: 0 2rem;

    & h1 {
        color: white;
    }
`;

function MainHeader() {
    return (
        <Header>
            <h1>A Typical Page</h1>
            <Navigation/>
        </Header>
    );
}

export default MainHeader;
