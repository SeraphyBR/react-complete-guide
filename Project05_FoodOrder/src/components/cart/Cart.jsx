import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../store/cart_context";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const CardList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    max-height: 20rem;
    overflow: auto;
`;

const CardTotal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 1rem 0;
`;

const Actions = styled.div`
    text-align: right;

    & button {
        font: inherit;
        cursor: pointer;
        background-color: transparent;
        border: 1px solid #8a2b06;
        padding: 0.5rem 2rem;
        border-radius: 25px;
        margin-left: 1rem;
    }

    & button:hover,
    & button:active {
        background-color: #5a1a01;
        border-color: #5a1a01;
        color: white;
    }
`;

const ButtonAlt = styled.button`
    ${Actions} & {
        color: #8a2b06;
    }
`;

const Button = styled.button`
    ${Actions} & {
        background-color: #8a2b06;
        color: white;
    }
`;

function Cart({onClose}) {
    const cartCtx = useContext(CartContext);

    const hasItems = cartCtx.items.length > 0;

    function cartItemAddHandler(item) {
        cartCtx.addItem({amount: 1, ...item})
    }

    function cartItemRemoveHandler(id) {
        cartCtx.removeItem(id);
    }

    return (
        <Modal onClose={onClose}>
            <CardList>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        onAdd={() => cartItemAddHandler(item)}
                        onRemove={() => cartItemRemoveHandler(item.id)}
                        {...item}
                    />
                ))}
            </CardList>
            <CardTotal>
                <span>Total Amount</span>
                <span>${cartCtx.totalAmount.toFixed(2)}</span>
            </CardTotal>
            <Actions>
                <ButtonAlt onClick={onClose}>Close</ButtonAlt>
                {hasItems && <Button>Order</Button>}
            </Actions>
        </Modal>
    );
}

export default Cart;
