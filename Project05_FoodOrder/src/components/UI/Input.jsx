import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    & label {
        font-weight: bold;
        margin-right: 1rem;
    }

    & input {
        width: 3rem;
        border-radius: 5px;
        border: 1px solid #ccc;
        font: inherit;
        padding-left: 0.5rem;
    }
`;

function Input({ label, id, ...input }, ref) {
    return (
        <StyledInput>
            <label htmlFor={id}>{label}</label>
            <input ref={ref} id={id} {...input} />
        </StyledInput>
    );
}

export default React.forwardRef(Input);
