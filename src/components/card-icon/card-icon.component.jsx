import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import "./card-icon.styles.scss";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";

const CardIcon = () => {

    const {isCartOpen, setIsCartOpen} = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <div className="card-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="item-count">0</span>
        </div>
    );
}

export default CardIcon;
