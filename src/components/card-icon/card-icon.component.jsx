import {CardIconContainer, ShoppingSvg, ItemCount} from "./card-icon.styles";
import {CartContext} from "../../context/cart.context";
import {useContext} from "react";

const CardIcon = () => {

    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

    const toggleIsCartOpen = () => {
        setIsCartOpen(!isCartOpen);
    }

    return (
        <CardIconContainer onClick={toggleIsCartOpen}>
            <ShoppingSvg/>
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CardIconContainer>
    );
}

export default CardIcon;
