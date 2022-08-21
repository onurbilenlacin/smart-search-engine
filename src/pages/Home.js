import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { resultActions } from "../actions/result.actions";
import ResultsContainer from "../components/ResultsContainer";
import { utils } from "../helpers/utils";
import logo from "../logo.svg";

const Home = () => {
    const { keyword } = useParams();

    const dispatch = useDispatch();

    const { results } = useSelector((state) => state.results);

    const [searchWord, setSearchWord] = React.useState("");

    useEffect(() => {
        if (typeof keyword !== "undefined" && keyword !== "") {
            dispatch(resultActions.getResult());
        }
    }, [dispatch, keyword]);

    return (
        <div className="container home-container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <Link to="/" onClick={() => window.location.reload()}>
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
                                className={`search-input home`}
                                type="text"
                                placeholder="Tu"
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
                                                let random =
                                                    Math.floor(
                                                        Math.random() * 100
                                                    ) + 1;
                                                return (
                                                    <ResultsContainer
                                                        result={result}
                                                        i={random}
                                                        usingOn="home"
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
