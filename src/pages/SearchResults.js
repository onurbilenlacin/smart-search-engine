import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import result_logo from "../result_logo.svg";
import { utils } from "../helpers/utils";
import { resultActions } from "../actions/result.actions";
import ResultsContainer from "../components/ResultsContainer";

const SearchResults = () => {
    const { keyword, orderBy, pageNo } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const { results } = useSelector((state) => state.results);

    const [searchWord, setSearchWord] = React.useState("");

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

        let filterResult =
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
        console.log(pagedResult);
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
        <div className="search-result-container">
            <nav className="navbar">
                <div className="container justify-content-start">
                    <Link to="/" className="navbar-brand">
                        <img src={result_logo} alt="logo" />
                    </Link>
                    <form className="d-flex search-form" role="search">
                        <input
                            className="search-input result-input me-4"
                            type="text"
                            placeholder="Tu"
                            onChange={(e) => setSearchWord(e.target.value)}
                            defaultValue={
                                searchWord === "" ? keyword : searchWord
                            }
                        />
                        <Link to={`/show-more/${searchWord}/nameAsc/page/1`}>
                            <button className="btn btn-secondary ">
                                Search
                            </button>
                        </Link>
                    </form>
                </div>
            </nav>
            {results && results.length > 0 && (
                <div className="row d-flex justify-content-center">
                    <div className="col  pre-results-container">
                        <div className="container">
                            {getFilteredResult(keyword, orderBy, pageNo).map(
                                (result, i) => {
                                    return (
                                        <ResultsContainer
                                            result={result}
                                            i={i}
                                        />
                                    );
                                }
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SearchResults;
