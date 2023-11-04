import {Outlet} from "react-router-dom";
import {Fragment, useContext} from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import {LogoContainer, NavigationContainer, NavLink, NavLinks} from './navigation.styles';
import {useSelector} from "react-redux";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import {selectCurrentUser} from "../../store/user/user.selector";
import {selectIsCartOpen} from "../../store/cart/cart.selector";

const Navigation = () => {
    const isCartOpen = useSelector(selectIsCartOpen)
    const currentUser = useSelector(selectCurrentUser);

    const signOutHandler = async () => {
        await signOutUser()
    }

    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <CrownLogo/>
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        SHOP
                    </NavLink>
                    {
                        currentUser ?
                            (<NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink>) :
                            (<NavLink to='/auth'>Sign-in</NavLink>)
                    }
                    <CardIcon/>
                </NavLinks>
                {isCartOpen && <CardDropdown/>}
            </NavigationContainer>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
