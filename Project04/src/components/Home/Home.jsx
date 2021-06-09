import React from "react";
import styled from "styled-components";

import Card from "../UI/Card/Card";

const HomeCard = styled(Card)`
    width: 90%;
    max-width: 40rem;
    padding: 3rem;
    margin: 2rem auto;
    text-align: center;
`;

function Home() {
    return (
        <HomeCard>
            <h1>Welcome back!</h1>
        </HomeCard>
    );
}

export default Home;
