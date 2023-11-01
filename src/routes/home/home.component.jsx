import Categories from "../../components/categories/categories.component";
import {Outlet} from "react-router-dom";

function Home() {
    return (
        <div>
            <Categories/>
            <Outlet/>
        </div>
    );
}

export default Home;
