import './category.styles.scss'
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/categories.selector";

const Category = () => {
    const [products, setProducts] = useState([]);

    const categoriesMap = useSelector(selectCategoriesMap);

    const {category} = useParams();

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
                {products && products.map((product) => {
                    return (
                        <ProductCard key={product?.id} product={product}/>
                    );
                })}
            </div>
        </>
    );
}

export default Category;
