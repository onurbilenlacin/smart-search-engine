import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { resultActions } from "../actions";
import ResultsContainer from "../components/ResultsContainer";
import { utils } from "../helpers/utils";
import logo from "../logo.svg";

const Home = () => {
    const { keyword } = useParams();
    const dispatch = useDispatch();
    const { results } = useSelector((state) => state.results);
    const [searchWord, setSearchWord] = React.useState("");

    const reloadPage = () => {
        setTimeout(() => window.location.reload(), 0.3);
    };

    useEffect(() => {
        !results && dispatch(resultActions.getResult());
    }, [dispatch, results]);

    return (
        <div className="container home-container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Link to="/" onClick={() => reloadPage()}>
                        <img className="home-logo" src={logo} alt="" />
                    </Link>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col home-header">
                    <p className="home-header-text float-end">Search web app</p>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="row d-flex justify-content-center">
                    <form className="d-flex home-search-form">
                        <div className="col-8 offset-lg-2 d-flex justify-content-center">
                            <input
                                className={`search-input home ${
                                    results &&
                                    results.length > 0 &&
                                    keyword !== undefined &&
                                    keyword !== "" &&
                                    utils.filterByName(results, keyword)
                                        .length === 0
                                        ? "search-input-error"
                                        : ""
                                }`}
                                type="text"
                                placeholder="Search"
                                onChange={(e) => setSearchWord(e.target.value)}
                                defaultValue={
                                    typeof keyword !== "undefined" &&
                                    keyword !== ""
                                        ? keyword
                                        : ""
                                }
                            />
                        </div>
                        <div className="col-2 d-flex justify-content-start">
                            <Link
                                to={`${
                                    typeof searchWord === "undefined" ||
                                    searchWord === ""
                                        ? "/"
                                        : `/search/${searchWord}`
                                }`}
                            >
                                <button className="btn btn-primary ms-3 ">
                                    Search
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
            {results &&
                results.length > 0 &&
                keyword !== undefined &&
                keyword !== "" &&
                utils.filterByName(results, keyword).length > 0 && (
                    <div className="row d-flex justify-content-center ">
                        <div className="col border result-list pre-results">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        {utils
                                            .filterByName(results, keyword)
                                            .slice(0, 3)
                                            .map((result, i) => {
                                                return (
                                                    <div key={i}>
                                                        <ResultsContainer
                                                            result={result}
                                                            usingOn="home"
                                                        />
                                                    </div>
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link
                                        to={`/show-more/${searchWord}/name-asc/page/1`}
                                        className="no-underline"
                                    >
                                        <p className="pt-4 pb-3">
                                            Show more...
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default Home;
