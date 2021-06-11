import React, { useContext } from "react";
import styled from "styled-components";
import AuthContext from "../../store/auth_context";
import Button from "../UI/Button/Button"
import Card from "../UI/Card/Card";

const HomeCard = styled(Card)`
    width: 90%;
    max-width: 40rem;
    padding: 3rem;
    margin: 2rem auto;
    text-align: center;
`;

function Home() {
    const authCtx = useContext(AuthContext);
    return (
        <HomeCard>
            <h1>Welcome back!</h1>
            <Button onClick={authCtx.onLogout}>Logout</Button>
        </HomeCard>
    );
}

export default Home;
