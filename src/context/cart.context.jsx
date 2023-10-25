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

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {
    },
    cartItems: [],
    addItemToCart: () => {
    },
    cartCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
        setCartCount(newCartCount)
    }, [cartItems])

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd))
    }

    return (
        <CartContext.Provider value={{isCartOpen, setIsCartOpen, cartItems, addItemToCart, cartCount}}>
            {children}
        </CartContext.Provider>
    )
}
