import CategoryPreview from "../../components/category-preview/categorie-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
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

