import {CardIconContainer, ShoppingSvg, ItemCount} from "./card-icon.styles";
import {selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selector";
import {useDispatch, useSelector} from "react-redux";
import {setIsCartOpen} from "../../store/cart/cart.action";

const CardIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen)
    const cartCount = useSelector(selectCartCount)
    const dispatch = useDispatch()

    const toggleIsCartOpen = () => {
        dispatch(setIsCartOpen(!isCartOpen))
    }

    return (
        <CardIconContainer onClick={toggleIsCartOpen}>
            <ShoppingSvg/>
            <ItemCount className="item-count">{cartCount}</ItemCount>
        </CardIconContainer>
    );
}

export default CardIcon;
