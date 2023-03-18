import {useDispatch, useSelector} from "react-redux";
import {selectorCategories, selectorCategory, setCategory} from "../Redux/Slices/categorySlice";

function Categories() {

    const categories = useSelector(selectorCategories)
    const category = useSelector(selectorCategory) // достаю данные из store
    const dispatch= useDispatch()

    function setActive(index: number) {
        dispatch(setCategory(index))
    }

    return(
        <div className="categories">
            <ul>
                {categories.map((el: any, i: number) =>
                    (<li key={i} onClick={() => setActive(i)}
                         className={(category === i) ? "active" : ""}>{el}</li>)
                        )}
            </ul>
        </div>
    )
}
export default Categories