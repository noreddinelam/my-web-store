import './checkout-item.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CheckoutItem = ({cartItem}) => {
    const {name, quantity, imageUrl, price} = cartItem;

    const {addItemToCart, removeCartItem, clearItemFromCart} = useContext(CartContext);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeCartItem(cartItem)}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemToCart(cartItem)}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    );
}

export default CheckoutItem;
