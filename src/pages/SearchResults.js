import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import result_logo from "../result_logo.svg";
import { utils } from "../helpers/utils";
import { resultActions } from "../actions/result.actions";
import ResultsContainer from "../components/ResultsContainer";
import order_icon from "../order_icon.svg";
import ClickOutsideDetector from "../components/ClickOutsideDetector";
import Pagination from "../components/Pagination";

const SearchResults = () => {
    const { keyword, orderBy, pageNo } = useParams();
    const dispatch = useDispatch();

    const { results } = useSelector((state) => state.results);

    const [searchWord, setSearchWord] = useState("");
    const [isSortMenuOpen, setIsSortMenuOpen] = useState(false);
    let filterResult;
    const getFilteredResult = (keyword, orderBy, pageNo) => {
        console.log("girdi");
        console.log({ keyword });
        console.log({ orderBy });
        console.log({ pageNo });
        if (
            orderBy === undefined ||
            keyword === undefined ||
            pageNo === undefined
        ) {
            return [];
        }

        filterResult =
            results &&
            results.length > 0 &&
            keyword !== undefined &&
            keyword !== "" &&
            utils.filterByName(results, keyword);
        console.log(filterResult);

        if (orderBy !== undefined && orderBy === "nameAsc") {
            filterResult = filterResult.sort((a, b) =>
                a[0].localeCompare(b[0])
            );
            console.log("nameascending calıstı");
        }
        if (orderBy !== undefined && orderBy === "nameDesc") {
            filterResult = filterResult.sort((a, b) =>
                b[0].localeCompare(a[0])
            );
            console.log("namedescending calıstı");
        }

        if (orderBy !== undefined && orderBy === "yearAsc") {
            filterResult = filterResult.sort((a, b) =>
                Number(a[3].slice(-4)) > Number(b[3].slice(-4)) ? 1 : -1
            );
            console.log("year asc calıstı");
        }

        if (orderBy !== undefined && orderBy === "yearDesc") {
            filterResult = filterResult.sort((a, b) =>
                Number(a[3].slice(-4)) < Number(b[3].slice(-4)) ? 1 : -1
            );
            console.log("year desc calıstı");
        }

        let pagedResult = paginate(filterResult, 6, pageNo);
        console.log({ pagedResult });
        return pagedResult;
    };

    function paginate(array, page_size, page_number) {
        return array.slice(
            (page_number - 1) * page_size,
            page_number * page_size
        );
    }

    useEffect(() => {
        !results && dispatch(resultActions.getResult());
    }, [results]);

    return (
        <div className="container mx-0">
            <nav className="navbar mt-3 ms-3">
                <div className="container justify-content-start">
                    <Link to="/" className="navbar-brand">
                        <img src={result_logo} alt="logo" />
                    </Link>
                    <form className="d-flex search-form" role="search">
                        <input
                            className="search-input result-input me-4 "
                            type="text"
                            placeholder="Tu"
                            onChange={(e) => setSearchWord(e.target.value)}
                            defaultValue={
                                searchWord === "" ? keyword : searchWord
                            }
                        />
                        <Link
                            to={`${
                                searchWord !== ""
                                    ? `/show-more/${searchWord}/nameAsc/page/1`
                                    : `/show-more`
                            }`}
                        >
                            <button className="btn btn-secondary ">
                                Search
                            </button>
                        </Link>
                    </form>
                </div>
            </nav>
            <div className="container px-0">
                {results &&
                    getFilteredResult(keyword, orderBy, pageNo).length > 0 && (
                        <div className="col">
                            <div className="row d-flex ms-2">
                                <div className="col-12 result-list all-results offset-lg-2">
                                    <div className="container position-relative">
                                        <div className="row position-relative">
                                            <ClickOutsideDetector
                                                listen
                                                onClickOutside={() => {
                                                    setIsSortMenuOpen(false);
                                                }}
                                                onClick={() =>
                                                    setIsSortMenuOpen(
                                                        !isSortMenuOpen
                                                    )
                                                }
                                                className="col position-absolute d-flex justify-content-end cursor-pointer"
                                            >
                                                <div className="col position-absolute d-flex justify-content-end cursor-pointer">
                                                    <img
                                                        src={order_icon}
                                                        alt=""
                                                    />
                                                    <h3 className="m-0">
                                                        Order By
                                                    </h3>
                                                </div>
                                                {isSortMenuOpen && (
                                                    <div className="row  justify-content-end">
                                                        <div className="col-2 position-absolute d-flex justify-content-end sort-menu">
                                                            <div className="container p-2">
                                                                <div className="row">
                                                                    <Link
                                                                        to={`/show-more/${keyword}/nameAsc/page/1`}
                                                                        className="px-0 no-underline"
                                                                    >
                                                                        <div className="col sort-menu-item  p-1">
                                                                            <p>
                                                                                Name
                                                                                ascending
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="row">
                                                                    <Link
                                                                        to={`/show-more/${keyword}/nameDesc/page/1`}
                                                                        className="px-0 no-underline"
                                                                    >
                                                                        <div className="col sort-menu-item  p-1">
                                                                            <p>
                                                                                Name
                                                                                descending
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="row">
                                                                    <Link
                                                                        to={`/show-more/${keyword}/yearAsc/page/1`}
                                                                        className="px-0 no-underline"
                                                                    >
                                                                        <div className="col sort-menu-item  p-1">
                                                                            <p>
                                                                                Year
                                                                                ascending
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                                <div className="row">
                                                                    <Link
                                                                        to={`/show-more/${keyword}/yearDesc/page/1`}
                                                                        className="px-0 no-underline"
                                                                    >
                                                                        <div className="col sort-menu-item  p-1">
                                                                            <p>
                                                                                Year
                                                                                descending
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </ClickOutsideDetector>
                                        </div>

                                        {getFilteredResult(
                                            keyword,
                                            orderBy,
                                            pageNo
                                        ).map((result, i) => {
                                            return (
                                                <ResultsContainer
                                                    keyword={keyword}
                                                    result={result}
                                                    i={i}
                                                    usingOn="results"
                                                />
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            {results && getFilteredResult(keyword, orderBy, pageNo).length > 0 && (
                <div className="row">
                    <div className="col-8 offset-1 mt-4">
                        <Pagination
                            items={filterResult}
                            itemsPerPage="6"
                            orderBy={orderBy}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
