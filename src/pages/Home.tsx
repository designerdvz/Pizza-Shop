import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination";
import {useDispatch, useSelector} from "react-redux";

import {fetchPizzas, selectorPizzaData } from "../Redux/Slices/PizzasSlice";
import {selectorSort} from "../Redux/Slices/sortSlice";
import {selectorCategories, selectorCategory} from "../Redux/Slices/categorySlice";
import {selectorCurrentPage} from "../Redux/Slices/paginationSlice";
import {selectorSearchValue} from "../Redux/Slices/searchSlice";
import {selectorCartItems} from "../Redux/Slices/cartSlice";

export const Home: React.FC = () => {
    const categories = useSelector(selectorCategories)
    const category = useSelector(selectorCategory) // достаю данные из store, как бы слушатель стора
    const sort = useSelector(selectorSort)
    const currentPage = useSelector(selectorCurrentPage)

    const { items, status } = useSelector(selectorPizzaData)
    const dispatch = useDispatch()

    const searchValue = useSelector(selectorSearchValue)


    React.useEffect( () => {

            const order: string = sort.sortProperty.includes('-') ? "asc" : "desc"
            const sortBy: string = sort.sortProperty.replace('-', '')
            const categoryType: string = category > 0 ? `category=${category}` : ''
            const search: string = searchValue ? `search=${searchValue}` : ''

             dispatch(
                    //@ts-ignore
                    fetchPizzas( {order, sortBy,categoryType, search, currentPage} )
                ) //это АСИНХРОННОЯ функция

                window.scrollTo(0, 0)

    }, [category, sort, searchValue, currentPage])


    const pizzas = items.map((el: any, i: number) =>  <PizzaBlock key={i} {...el} /> )
    //деструктуризация oбъекта el
    const skeletons = [...new Array(6)].map((el, i) => <Skeleton key={i}/>)

    return (
        <div className="container">

            <div className="content__top">
                <Categories/>
                <Sort/>
            </div>
            <h2 className="content__title">{categories[category]}</h2>

                {status === 'error' ? (
                    <div className='errorServer'>
                    <h2>Произошла ошибка на сервере <span>😕</span> </h2>
                    <p> К сожалению, пиццы не удалось загрузить. Попробуйте, пожалуйста, позже </p>
                    </div>
                        ) : (
                    <div className="content__items">
                {status === 'loading' ? skeletons :
                    pizzas}

            </div> )}
            <Pagination/>
        </div>
    )
}
export default Home