import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useState} from "react";
import Pagination from "../components/Pagination";

export const Home = (props) => {

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [category, setCategory] = React.useState(0)
    const [currentPage, setCurrentPage] = React.useState(1)
    const [sort, setSort] = useState({
        name: 'популярности',
        sortProperty: 'rating'
    })

    const pizzas = items.map((el, i) => <PizzaBlock key={i} {...el}/>)
    const skeletons = [...new Array(6)].map((el, i) => <Skeleton key={i}/>)

    React.useEffect(() => {
        setIsLoading(true)
        const order = sort.sortProperty.includes('-') ? "asc" : "desc"
        const sortBy = sort.sortProperty.replace('-', '')
        const categoryType = category > 0 ? `category=${category}` : ''
        const search = props.searchValue ? `search=${props.searchValue}` : ''


        fetch(`https://6325f8aa70c3fa390f924e62.mockapi.io/items?page=${currentPage}&limit=4&${categoryType}&sortBy=${sortBy}&order=${order}&${search}`).then((res) => {
            return res.json()
        }).then((arr) => {
            setItems(arr)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [category, sort, props.searchValue, currentPage] )


    return (
        <div className="container">

            <div className="content__top">
                <Categories category={category} setCategory={setCategory}/>
                <Sort sort={sort} setSort={setSort}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons :
                    pizzas}
            </div>
            <Pagination setCurrentPage={setCurrentPage}/>
        </div>
    )
}
export default Home