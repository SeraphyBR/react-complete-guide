import React, { useContext } from "react";
import styled from "styled-components";
import CartContext from "../../../store/cart_context";
import MealItemForm from "./MealItemForm";

const Meal = styled.li`
    display: flex;
    justify-content: space-between;
    margin: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid #ccc;

    & h3 {
        margin: 0 0 0.25rem 0;
    }
`;

const Description = styled.div`
    font-style: italic;
`;

const Price = styled.div`
    margin-top: 0.25rem;
    font-weight: bold;
    color: #ad5502;
    font-size: 1.25rem;
`;

function MealItem({id, name, description, price }) {
    const cartCtx = useContext(CartContext);

    function addToCartHandler(amount) {
        cartCtx.addItem({
            id,
            name,
            amount,
            price
        })
    }

    return (
        <Meal>
            <div>
                <h3>{name}</h3>
                <Description>{description}</Description>
                <Price>${price.toFixed(2)}</Price>
            </div>
            <div>
                <MealItemForm onAddToCart={addToCartHandler} id={id}/>
            </div>
        </Meal>
    );
}

export default MealItem;
