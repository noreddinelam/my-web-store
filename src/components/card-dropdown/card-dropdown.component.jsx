import Button from "../button/button.component";

import {useNavigate} from "react-router-dom";

import './card-dropdown.styles.scss';
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
        <div className="card-dropdown-container">
            <div className="card-items">
                {
                    cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                }
            </div>
            <Button onClick={goToCheckout}>GO TO CHECKOUT</Button>
        </div>
    );
}

export default CardDropdown;
