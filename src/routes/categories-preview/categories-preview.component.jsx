import {useContext} from "react";
import {CategoriesContext} from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/categorie-preview.component";

const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext)
    return (
        <>
            {
                Object.keys(categoriesMap).map((categoryTitle) => {
                    return (
                        <CategoryPreview key={categoryTitle} title={categoryTitle}
                                         products={categoriesMap[categoryTitle]}/>
                    )
                })
            }
        </>
    )
}

export default CategoriesPreview;

