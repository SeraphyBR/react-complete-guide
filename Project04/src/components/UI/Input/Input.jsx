import React from 'react';
import styled from 'styled-components';

const InputControl = styled.div`
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

function Input({isValid, label, id, type, value, onChange, onBlur}) {
    return (
        <InputControl invalid={!isValid}>
            <label htmlFor={id}>{label}</label>
            <input
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </InputControl>
    );
}

export default Input;