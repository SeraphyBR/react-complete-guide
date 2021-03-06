import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth_context";
import Input from "../UI/Input/Input";

const LoginCard = styled(Card)`
    width: 90%;
    max-width: 40rem;
    margin: 2rem auto;
    padding: 2rem;
`;


const Actions = styled.div`
    text-align: center;
`;

function Login() {
    const authCtx = useContext(AuthContext);
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [formIsValid, setFormIsValid] = useState(false);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    useEffect(() => {
        const timer = setTimeout(() => {
            setFormIsValid(
                enteredEmail.includes("@") &&
                enteredPassword.trim().length > 6
            );
        }, 500);

        return () => clearTimeout(timer);
    }, [enteredEmail, enteredPassword]);

    function emailChangeHandler(event) {
        setEnteredEmail(event.target.value);
    }

    function passwordChangeHandler(event) {
        setEnteredPassword(event.target.value);
    }

    function validateEmailHandler() {
        setEmailIsValid(enteredEmail.includes("@"));
    }

    function validatePasswordHandler() {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    }

    function submitHandler(event) {
        event.preventDefault();
        if(formIsValid) {
            authCtx.onLogin(enteredEmail, enteredPassword);
        } else if (!emailIsValid) {
            emailInputRef.current.focus();
        } else {
            passwordInputRef.current.focus();
        }
    }

    return (
        <LoginCard>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="email"
                    label="E-Mail"
                    type="email"
                    isValid={emailIsValid}
                    value={enteredEmail}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />
                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passwordIsValid}
                    value={enteredPassword}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />
                <Actions>
                    <Button type="submit">
                        Login
                    </Button>
                </Actions>
            </form>
        </LoginCard>
    );
}

export default Login;
