import {Link, Outlet} from "react-router-dom";
import {Fragment, useContext} from 'react';
import {ReactComponent as CrownLogo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import {UserContext} from "../../context/user.context";
import {signOutUser} from "../../utils/firebase/firebase.utils";
import CardIcon from "../../components/card-icon/card-icon.component";
import CardDropdown from "../../components/card-dropdown/card-dropdown.component";
import {CartContext} from "../../context/cart.context";

const Navigation = () => {
    const {currentUser} = useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);

    const signOutHandler = async () => {
        await signOutUser()
    }

    return (
        <Fragment>
            <div className="navigation">
                <Link className='logo-container' to='/'>
                    <CrownLogo/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ?
                            (<span className='nav-link' onClick={signOutHandler}>SIGN OUT</span>) :
                            (<Link className="nav-link" to='/auth'>Sign-in</Link>)
                    }
                    <CardIcon/>
                </div>
                {isCartOpen && <CardDropdown/>}
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation;
