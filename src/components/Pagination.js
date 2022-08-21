import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate, useParams } from "react-router-dom";

const Pagination = ({ items, itemsPerPage }) => {
    console.log({ items });
    const { keyword, orderBy, pageNo } = useParams();
    const navigate = useNavigate();
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);
    console.log(currentItems);
    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, items]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;

        setItemOffset(newOffset);
        navigate(`/show-more/${keyword}/${orderBy}/page/${event.selected + 1}`);
    };

    useEffect(() => {
        setItemOffset(0);
    }, [orderBy]);

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
