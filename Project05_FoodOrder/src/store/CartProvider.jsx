import React, { useReducer } from "react";
import CartContext from "./cart_context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

function cartReducer(state, action) {
    if(action.type === "ADD"){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );

        if(existingCartItemIndex !== -1) {
            state.items[existingCartItemIndex].amount += action.item.amount;
        }
        else {
            state.items.push(action.item);
        }

        state.totalAmount += action.item.price * action.item.amount;

    } else if (action.type === "REMOVE") {

    }
    return state;
}

function CartProvider({children}) {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    function addItemToCardHandler(item) {
        dispatchCartAction({
            type: "ADD",
            item
        });
    }

    function removeItemFromCartHandler(id) {
        dispatchCartAction({
            type: "REMOVE",
            id
        })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCartHandler
    };


    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;