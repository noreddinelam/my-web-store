import './category.styles.scss'
import {useParams} from "react-router-dom";
import {CategoriesContext} from "../../context/categories.context";
import {useContext, useEffect, useState} from "react";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
    const [products, setProducts] = useState([]);

    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);

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
