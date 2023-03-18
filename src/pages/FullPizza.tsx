import React, {useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

const FullPizza: React.FC = () => {
    const {id} = useParams() //делает перерисовку при каждом изменении id
    const [pizza, setPizza] = useState<{
        title: string,
        imageUrl: string,
        price: number
    }>()

    React.useEffect (() => {
        async function  fetchPizza () {
            try {
                const {data} = await axios.get('https://6325f8aa70c3fa390f924e62.mockapi.io/items/' + id)
                setPizza(data)
            }
           catch {
                alert ('Ошибка при получении пиццы')
           }
        }
        fetchPizza()
    }, [])

    if (!pizza) {
        return  <>Загрузка...</>
    }

    return (
        <>
            <div className="container">
                <h2>{pizza.title}</h2>
                <img className="full_pizza_img" src={pizza.imageUrl}></img>
                <p>{pizza.price} ₽ </p>
            </div>
        </>
    )
}

export default FullPizza