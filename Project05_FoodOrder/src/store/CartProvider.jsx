import React, { useReducer } from "react";
import CartContext from "./cart_context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

function cartReducer(state, action) {
    const newState = { ...state };

    const index = state.items.findIndex(
        (item) => item.id === (action.item?.id || action.id)
    );

    if (action.type === "ADD") {
        // We have to create a new array with the old values,
        // for react detect changes
        const updatedItems = [...state.items];

        if (index !== -1) {
            updatedItems[index].amount += action.item.amount;
        } else {
            updatedItems.push(action.item);
        }

        newState.totalAmount += action.item.price * action.item.amount;
        newState.items = updatedItems;
    } else if (action.type === "REMOVE") {
        const updatedItems = [...state.items];
        const item = updatedItems[index];

        newState.totalAmount -= item.price;
        item.amount === 1 ? updatedItems.splice(index) : (item.amount -= 1);
        newState.items = updatedItems;
    }

    // You need to create a new object from the older, so that react knows that it changed
    return newState;
}

function CartProvider({ children }) {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    function addItemToCardHandler(item) {
        console.log("teste");
        dispatchCartAction({
            type: "ADD",
            item,
        });
    }

    function removeItemFromCartHandler(id) {
        dispatchCartAction({
            type: "REMOVE",
            id,
        });
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCardHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
