import React from "react";

function Categories() {
    const [activeIndex, setActiveIndex] = React.useState(0)
    const categories = ['Все','Мясные','Вегетарианская','Гриль','Острые','Закрытые']

    function setActive(index) {
        setActiveIndex(index)
    }

    return(
        <div className="categories">
            <ul>
                {categories.map((el, i) =>
                    (<li key={i} onClick={() => setActive(i)}
                         className={(activeIndex === i) ? "active" : ""}>{el}</li>)
                        )}
            </ul>
        </div>
    )
}
export default Categories