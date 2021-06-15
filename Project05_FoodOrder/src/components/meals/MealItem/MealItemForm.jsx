import React, { useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../UI/Input";

const Form = styled.form`
    text-align: right;

    & button {
        font: inherit;
        cursor: pointer;
        background-color: #8a2b06;
        border: 1px solid #8a2b06;
        color: white;
        padding: 0.25rem 2rem;
        border-radius: 20px;
        font-weight: bold;
    }

    & button:hover,
    & button:active {
        background-color: #641e03;
        border-color: #641e03;
    }
`;

function MealItemForm({ id, onAddToCart }) {
    const [amountIsValid, setAmountIsValid] = useState(false);
    const amountInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        const isNotValid =
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5;

        if (isNotValid) {
            setAmountIsValid(false);
            return;
        }

        onAddToCart(enteredAmountNumber);
    }

    return (
        <Form onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                id={`amount_${id}`}
                type="number"
                min="1"
                max="5"
                step="1"
                defaultValue="1"
            />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
        </Form>
    );
}

export default MealItemForm;
