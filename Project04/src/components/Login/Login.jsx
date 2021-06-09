import React, { useState } from "react";
import styled from "styled-components";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const LoginCard = styled(Card)`
    width: 90%;
    max-width: 40rem;
    margin: 2rem auto;
    padding: 2rem;
`;

const FormControl = styled.div`
    margin: 1rem 0;
    display: flex;
    align-items: stretch;
    flex-direction: column;

    & label,
    & input {
        display: block;
    }

    & label {
        font-weight: bold;
        flex: 1;
        color: #464646;
        margin-bottom: 0.5rem;
    }

    & input {
        flex: 3;
        font: inherit;
        padding: 0.35rem 0.35rem;
        border-radius: 6px;
        border: 1px solid ${(props) => (props.invalid ? "red" : "#ccc")};
        background: ${(props) => (props.invalid ? "#ffd7d7" : "transparent")};
    }

    & input:focus {
        outline: none;
        border-color: #4f005f;
        background: #f6dbfc;
    }

    @media (min-width: 768px) {
        align-items: center;
        flex-direction: row;
    }
`;

const Actions = styled.div`
    text-align: center;
`;

function Login({ onLogin }) {
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);

    function emailChangeHandler(event) {
        setEnteredEmail(event.target.value);

        setFormIsValid(
            event.target.value.includes("@") &&
                enteredPassword.trim().length > 6
        );
    }

    function passwordChangeHandler(event) {
        setEnteredPassword(event.target.value);

        setFormIsValid(
            event.target.value.trim().length > 6 && enteredEmail.includes("@")
        );
    }

    function validateEmailHandler() {
        setEmailIsValid(enteredEmail.includes("@"));
    }

    function validatePasswordHandler() {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    }

    function submitHandler(event) {
        event.preventDefault();
        onLogin(enteredEmail, enteredPassword);
    }

    return (
        <LoginCard>
            <form onSubmit={submitHandler}>
                <FormControl invalid={!emailIsValid}>
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={enteredEmail}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </FormControl>
                <FormControl invalid={!passwordIsValid}>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={enteredPassword}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </FormControl>
                <Actions>
                    <Button type="submit" disabled={!formIsValid}>
                        Login
                    </Button>
                </Actions>
            </form>
        </LoginCard>
    );
}

export default Login;
