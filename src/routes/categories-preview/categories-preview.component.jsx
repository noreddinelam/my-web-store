import CategoryPreview from "../../components/category-preview/categorie-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectIsCategoriesLoading} from "../../store/categories/categories.selector";
import SpinnerComponent from "../../components/spinner/spinner.component";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const categoriesLoading = useSelector(selectIsCategoriesLoading)
    return (
        <>
            {
                categoriesLoading ? <SpinnerComponent/> :
                    (Object.keys(categoriesMap).map((categoryTitle) => {
                        return (
                            <CategoryPreview key={categoryTitle} title={categoryTitle}
                                             products={categoriesMap[categoryTitle]}/>
                        )
                    }))
            }
        </>
    )
}

export default CategoriesPreview;

