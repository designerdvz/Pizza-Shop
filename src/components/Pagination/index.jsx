import React from "react";
import ReactPaginate from "react-paginate";

import s from "./pagination.module.scss"

const Pagination = (props) => {
    return (
        <>
            <ReactPaginate
                className={s.root}
                pageCount={3}
                onPageChange={(i) => props.setCurrentPage(i.selected + 1) }
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