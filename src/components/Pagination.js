import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

const Pagination = ({ itemCount, itemsPerPage }) => {
    const { keyword, orderBy, pageNo } = useParams();
    const navigate = useNavigate();
    const [pageCount, setPageCount] = useState(0);

    useEffect(() => {
        setPageCount(Math.ceil(itemCount / itemsPerPage));
    }, [itemCount, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        navigate(`/show-more/${keyword}/${orderBy}/page/${event.selected + 1}`);
    };

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel="Next"
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="Previous"
                renderOnZeroPageCount={null}
                containerClassName="pagination_buttons"
                previousLinkClassName="previous_button"
                nextLinkClassName="next_button"
                disabledClassName="disabled_button"
                activeClassName="active_button"
                forcePage={pageNo - 1}
            />
        </>
    );
};

export default Pagination;
