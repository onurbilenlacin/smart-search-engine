import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router-dom";

import { resultActions } from "../actions/result.actions";
import ResultsContainer from "../components/ResultsContainer";
import { utils } from "../helpers/utils";
import logo from "../logo.svg";

const Home = () => {
    const { keyword } = useParams();
    const location = useLocation();
    const dispatch = useDispatch();

    const { results } = useSelector((state) => state.results);

    const [searchWord, setSearchWord] = React.useState("");

    useEffect(() => {
        if (typeof keyword !== "undefined") {
            dispatch(resultActions.getResult());
        }
    }, [dispatch, keyword]);

    // useEffect(() => {
    //     if (searchWord === "") {
    //         dispatch(resultActions.setResultEmpty());
    //     }
    // }, [dispatch, searchWord]);

    useEffect(() => {
        location.pathname === "/" && setSearchWord("");
    }, [location.pathname]);

    return (
        <div className="container home-container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Link to="/">
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
                                className="search-input home"
                                type="text"
                                placeholder="Tu"
                                onChange={(e) => setSearchWord(e.target.value)}
                                defaultValue={
                                    searchWord === "" ? keyword : searchWord
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
                                <button className="btn btn-primary ">
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
                utils.filterByName(results, keyword) && (
                    <div className="row d-flex justify-content-center ">
                        <div className="col border pre-results-container">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        {utils
                                            .filterByName(results, keyword)
                                            .slice(0, 3)
                                            .map((result, i) => {
                                                return (
                                                    <ResultsContainer
                                                        result={result}
                                                        i={i}
                                                    />
                                                );
                                            })}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Link
                                        to={`/show-more/${searchWord}/nameAsc/page/1`}
                                    >
                                        <span>Show more...</span>
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
