import React from "react";

function Categories(props) {

    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    function setActive(index) {
        props.setCategory(index)
    }

    return(
        <div className="categories">
            <ul>
                {categories.map((el, i) =>
                    (<li key={i} onClick={() => setActive(i)}
                         className={(props.category === i) ? "active" : ""}>{el}</li>)
                        )}
            </ul>
        </div>
    )
}
export default Categories