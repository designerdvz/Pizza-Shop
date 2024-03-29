import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectorSort, setSort, selectorSortList} from "../Redux/Slices/sortSlice";

function Sort() {
    const [open, setOpen] = React.useState(false)

    type sortItem = {
        name: string;
        sortProperty: string
    }


    const sort: sortItem = useSelector(selectorSort)         //Достаю из стора необходимое
    const sortList: sortItem[] = useSelector(selectorSortList)
    const dispatch = useDispatch()
    const sortRef = React.useRef<HTMLDivElement>(null)

    function addSort(el: sortItem
    ) {
        dispatch(setSort(el)) //тут диспатч, т.к у нас setSort это AC, а в скобках el, т.к это payload
        setOpen(false)
    }

    React.useEffect(() => { //это действие когда компонент создался
        const handleClickSort = (event: MouseEvent) => {
            const _event = event as MouseEvent & { //мы по сути написали const _event = event.
                // У нас есть новая _event, она является как тип MouseEvent и плюс тип path
                path: Node[]
            }

            if (sortRef.current && !_event.path.includes(sortRef.current)) {
                setOpen(false)
            }
        }
        document.body.addEventListener('click', handleClickSort)

        return () => {   //это действие при размонтировании, вызовет когда компонент будет умирать
            document.body.removeEventListener('click', handleClickSort)


        }
    }, [])

    return (<div className="sort" ref={sortRef}>
        <div className="sort__label">
            <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                    fill="#2C2C2C"
                />
            </svg>
            <b>Сортировка по:</b>
            <span onClick={() => setOpen(!open)}>{sort.name}</span>
        </div>
        {open && (<div className="sort__popup">
            <ul>
                {sortList.map((el, index: number) =>
                    <li key={index} onClick={() => {
                        addSort(el)
                    }
                    } className={(sort.sortProperty === el.sortProperty) ? "active" : ""}> {el.name} </li>)}
            </ul>
        </div>)}
    </div>)
}

export default Sort