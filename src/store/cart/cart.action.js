import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTIONS_TYPES} from "./cart.types";

const addCartItem = (cartItems = [], productToAdd) => {
    console.log(cartItems);
    const existingCard = cartItems?.find((cartItem) => cartItem?.id === productToAdd?.id);
    if (!!existingCard) {
        return cartItems.map((item) => {
            if (item?.id === productToAdd?.id) {
                return {...item, quantity: item.quantity + 1}
            }
            return item;
        })
    }
    return [...cartItems, {...productToAdd, quantity: 1}]
}

const removeCartItem = (cartItems = [], productToRemove) => {
    const existingCard = cartItems?.find((cartItem) => cartItem?.id === productToRemove?.id);
    if (existingCard?.quantity === 1) {
        return cartItems.filter((item) => item?.id !== productToRemove?.id);
    }
    return cartItems.map((item) => {
        if (item?.id === productToRemove?.id) {
            return {...item, quantity: item.quantity - 1}
        }
        return item;
    })
}

const clearCartItem = (cartItems = [], productToRemove) => {
    return cartItems?.filter((item) => item?.id !== productToRemove?.id);
}

export const setIsCartOpen = (isCartOpen) => createAction(CART_ACTIONS_TYPES.SET_IS_CART_OPEN, isCartOpen)

export const addItemToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}

export const removeItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove)
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}

export const clearItemFromCart = (cartItems, productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove)
    return createAction(CART_ACTIONS_TYPES.SET_CART_ITEMS, newCartItems)
}
