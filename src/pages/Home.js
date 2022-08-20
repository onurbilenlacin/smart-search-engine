import React from "react";
import logo from "../logo.svg";

const Home = () => {
    return (
        <div className="container home-container">
            <div className="row">
                <div className="col d-flex justify-content-center">
                    <img className="home-logo" src={logo} alt="" />
                </div>
            </div>
            <div className="row  d-flex justify-content-center">
                <div className="col home-header">
                    <p className="home-header-text float-end">Search web app</p>
                </div>
            </div>
            <div className="row d-flex search-bar">
                <div className="col d-flex justify-content-end">
                    <input
                        className="home-search-input"
                        type="text"
                        placeholder="Tu"
                    />
                    <button className="btn btn-primary search-button">
                        Search
                    </button>
                </div>
            </div>
            <div className="row d-flex justify-content-center">
                <div className="col border pre-results-container">
                    <div className="container">
                        <div className="row">
                            <div className="col border-bottom">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <h3>Turkey - İstanbul</h3>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <h3
                                            className="float-lg-end
"
                                        >
                                            Email: abc@xyz.com
                                        </h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="secondary-text">
                                            Jane Doe - 2016
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col border-bottom">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <h3>Turkey - İstanbul</h3>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <h3
                                            className="float-lg-end
"
                                        >
                                            Email: abc@xyz.com
                                        </h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="secondary-text">
                                            Jane Doe - 2016
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col border-bottom">
                                <div className="row">
                                    <div className="col-md-12 col-lg-6">
                                        <h3>Turkey - İstanbul</h3>
                                    </div>
                                    <div className="col-md-12 col-lg-6">
                                        <h3
                                            className="float-lg-end
"
                                        >
                                            Email: abc@xyz.com
                                        </h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <p className="secondary-text">
                                            Jane Doe - 2016
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <span>Show more...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
