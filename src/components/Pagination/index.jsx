import React from "react";
import ReactPaginate from "react-paginate";

import s from "./pagination.module.scss"
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../Redux/Slices/paginationSlice";

const Pagination = ( ) => {
    const currentPage = useSelector((state) => state.pagination.currentPage) // достаю данные из store
    const pageCount = useSelector((state) => state.pagination.pageCount) // достаю данные из store
    const dispatch= useDispatch()

    return (
        <>
            <ReactPaginate
                className={s.root}
                pageCount={3}
                onPageChange={(i) => dispatch(setCurrentPage(i.selected + 1)) }
                nextLabel={'->'}
                previousLabel={'<-'}
                breakLabel={' ... '}
                pageRangeDisplayed={4}
                renderOnZeroPageCount={null}
            />
        </>
    )
}

export default Pagination