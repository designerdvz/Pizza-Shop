import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import {useState} from "react";
import Pagination from "../components/Pagination";
import {SearchContext} from "../App";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import qs from 'qs'
import {useNavigate} from 'react-router-dom'

export const Home = () => {
    const categories = useSelector((state) => state.categoryReducer.categories)
    const category = useSelector((state) => state.categoryReducer.category) // достаю данные из store, как бы слушатель стора
    const sort = useSelector((state) => state.sortReducer.sort)
    const currentPage = useSelector((state) => state.pagination.currentPage)

    const [items, setItems] = React.useState([])
    const [isLoading, setIsLoading] = React.useState(true)

    const {searchValue} = React.useContext(SearchContext)


    const pizzas = items.map((el, i) => <PizzaBlock key={i} pizza={el}/>) //деструктуризация oбъекта el
    // const pizzas = items.map((el, i) => <PizzaBlock key={i} pizza={el}/>) //разворачиваю oбъект el
    const skeletons = [...new Array(6)].map((el, i) => <Skeleton key={i}/>)
    const navigate= useNavigate() //для отображения в строке запроса

    React.useEffect(() => {
        setIsLoading(true)
        const order = sort.sortProperty.includes('-') ? "asc" : "desc"
        const sortBy = sort.sortProperty.replace('-', '')
        const categoryType = category > 0 ? `category=${category}` : ''
        const search = searchValue ? `search=${searchValue}` : ''


        axios.get(`https://6325f8aa70c3fa390f924e62.mockapi.io/items?page=${currentPage}&limit=4&${categoryType}&sortBy=${sortBy}&order=${order}&${search}`).then((res) => {
            setItems(res.data)
            setIsLoading(false)
        })
        window.scrollTo(0, 0)
    }, [category, sort, searchValue, currentPage])


    React.useEffect(() => {  //формируем строчку
    const queryString = qs.stringify({
        categoryId:category ,
        sortProperty: sort.sortProperty,
        currentPage
    })

        navigate(`?${queryString}`)    // отобразим строчку сформированную
    }, [category, sort, searchValue, currentPage])
    return (
        <div className="container">

            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">{categories[category]}</h2>
            <div className="content__items">
                {isLoading ? skeletons :
                    pizzas}
            </div>
            <Pagination/>
        </div>
    )
}
export default Home