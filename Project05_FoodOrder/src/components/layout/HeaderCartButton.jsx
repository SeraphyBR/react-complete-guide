import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart_context";
import CartIcon from "../cart/CartIcon";

const IconSpan = styled.span`
    width: 1.35rem;
    height: 1.35rem;
    margin-right: 0.5rem;
`;

const BadgeSpan = styled.span`
    background-color: #b94517;
    padding: 0.25rem 1rem;
    border-radius: 25px;
    margin-left: 1rem;
    font-weight: bold;
`;

const Button = styled.button`
    cursor: pointer;
    font: inherit;
    border: none;
    background-color: #4d1601;
    color: white;
    padding: 0.75rem 3rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 25px;
    font-weight: bold;

    &:hover,
    &:active {
        background-color: #2c0d00;
    }

    &:hover ${BadgeSpan}, &:active ${BadgeSpan} {
        background-color: #92320c;
    }

    .bump {
        animation: bump 300ms ease-out;
    }

    @keyframes bump {
        0% {
            transform: scale(1);
        }
        10% {
            transform: scale(0.9);
        }
        30% {
            transform: scale(1.1);
        }
        50% {
            transform: scale(1.15);
        }
        100% {
            transform: scale(1);
        }
    }
`;

function HeaderCartButton({ ...button }) {
    const cardCtx = useContext(CartContext);

    const numberOfCartItems = cardCtx.items.reduce(
        (prev, item) => prev + item.amount,
        0
    );

    return (
        <Button {...button}>
            <IconSpan>
                <CartIcon />
            </IconSpan>
            <span>Your Cart</span>
            <BadgeSpan>{numberOfCartItems}</BadgeSpan>
        </Button>
    );
}

export default HeaderCartButton;
