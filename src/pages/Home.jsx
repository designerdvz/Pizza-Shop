import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";

export const Home = () => {
    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    React.useEffect(() => {
        fetch('https://6325f8aa70c3fa390f924e62.mockapi.io/items').then((res) => {
            return res.json()
        }).then((arr) => {
            setItems(arr)
            setIsLoading(false)
        })
        window.scrollTo(0,0)
    }, [])


    return (
        <div className="container">

                <div className="content__top">
                    <Categories />
                    <Sort />
                </div>
                <h2 className="content__title">Все пиццы</h2>
                <div className="content__items">
                    {isLoading ? [...new Array(6)].map((el,i) => <Skeleton key={i} />) :
                        items.map((el, i) => isLoading ? <Skeleton/> : <PizzaBlock key={i} {...el}/>)}
                </div>

        </div>
    )
}
export default Home