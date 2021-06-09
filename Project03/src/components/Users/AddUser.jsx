import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../UI/Button';
import card from '../UI/Card';
import ErrorModal from '../UI/ErrorModal';

const Card = styled(card)`
    margin: 2rem auto;
    padding: 1rem;
    width: 90%;
    max-width: 40rem;

    & label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }

    & input {
        font: inherit;
        display: block;
        width: 100%;
        border: 1px solid #ccc;
        padding: 0.15rem;
        margin-bottom: 0.5rem;
    }

    & input:focus {
        outline: none;
        border-color: #4f005f;
    }
`;


function AddUser({onAddUser}) {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    const [error, setError] = useState();

    function addUserHandler(event) {
        event.preventDefault();

        const enteredUsername = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }

        if(+enteredAge < 1) {

            setError({
                title: "Invalid age",
                message: "Please enter a valid age and age (> 0)."
            });
            return;
        }

        onAddUser(enteredUsername, enteredAge);
        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    function errorHandler() {
        setError(undefined);
    }

    return(
        <>
            {error && <ErrorModal {...error} onConfirm={errorHandler}/>}
            <Card>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        ref={nameInputRef}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        ref={ageInputRef}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default AddUser;