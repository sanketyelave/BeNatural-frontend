import React, { createContext, useReducer } from 'react';

const initialState = {
    cart: [],
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id),
            };
        // Add other actions as needed (e.g., update quantity)
        default:
            return state;
    }
};

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    return (
        <CartContext.Provider
            value={{
                cart: state.cart,
                addToCart,
                removeFromCart,
                // Add other cart-related functions here
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
