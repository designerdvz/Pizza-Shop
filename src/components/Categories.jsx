import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCategory} from "../Redux/Slices/categorySlice";

function Categories() {

    const categories = useSelector((state) => state.categoryReducer.categories)
    const category = useSelector((state) => state.categoryReducer.category) // достаю данные из store
    const dispatch= useDispatch()

    function setActive(index) {
        dispatch(setCategory(index))
    }

    return(
        <div className="categories">
            <ul>
                {categories.map((el, i) =>
                    (<li key={i} onClick={() => setActive(i)}
                         className={(category === i) ? "active" : ""}>{el}</li>)
                        )}
            </ul>
        </div>
    )
}
export default Categories