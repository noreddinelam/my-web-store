import {createContext, useEffect, useState} from "react";

const addCartItem = (cartItems = [], productToAdd) => {
    const existingCard = cartItems.find((cartItem) => cartItem?.id === productToAdd?.id);
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
    const existingCard = cartItems.find((cartItem) => cartItem?.id === productToRemove?.id);
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
    return cartItems.filter((item) => item?.id !== productToRemove?.id);
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    removeCartItem: () => {
    },
    clearItemFromCart: () => {
    },
    cartCount: 0,
    cartTotal: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCartCount)
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
        setCartTotal(newCartTotal)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeCartItem(cartItems, productToRemove))
    }

    const clearItemFromCart = (productToRemove) => {
        setCartItems(clearCartItem(cartItems, productToRemove))
    }

    return (
        <CartContext.Provider value={{isCartOpen, setIsCartOpen, cartItems, addItemToCart, removeCartItem: removeItemFromCart, clearItemFromCart, cartCount, cartTotal: cartTotal}}>
            {children}
        </CartContext.Provider>
    )
}
