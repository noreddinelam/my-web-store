import Button from "../button/button.component";

import {useNavigate} from "react-router-dom";

import {CardDropdownContainer, CardItems, EmptyMessage} from './card-dropdown.styles';

import {CartItem} from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";


const CardDropdown = () => {

    const navigate = useNavigate();

    const {cartItems} = useContext(CartContext);

    const goToCheckout = () => {
        navigate('/checkout');
    }

    return (
        <CardDropdownContainer>
            <CardItems>
                {
                    !!cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>) : (
                        <EmptyMessage>Your cart is empty!</EmptyMessage>)
                }
            </CardItems>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </CardDropdownContainer>
    );
}

export default CardDropdown;
