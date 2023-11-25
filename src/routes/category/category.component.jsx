import './category.styles.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectIsCategoriesLoading} from "../../store/categories/categories.selector";
import SpinnerComponent from "../../components/spinner/spinner.component";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const [products, setProducts] = useState([]);

    const categoriesMap = useSelector(selectCategoriesMap);
    const categoriesLoading = useSelector(selectIsCategoriesLoading);

    const {category} = useParams();

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            {
                categoriesLoading ? <SpinnerComponent/> : (
                    <div className='category-container'>
                        {products && products.map((product) => {
                            return (
                                <ProductCard key={product?.id} product={product}/>
                            );
                        })}
                    </div>
                )
            }

        </>
    );
}

export default Category;
