import {Route, Routes} from 'react-router-dom';
import {useDispatch} from "react-redux";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./shop/shop.component";
import Checkout from "./components/checkout/checkout.component";
import {checkUserSession} from "./store/user/user.action";
import {useEffect} from "react";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkUserSession());
    }, []);

    return (
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path='/shop/*' element={<Shop/>}/>
                <Route path='/auth' element={<Authentication/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
            </Route>
        </Routes>
    );
}

export default App;
