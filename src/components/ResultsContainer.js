import React from "react";

const ResultsContainer = ({ result, i, usingOn }) => {
    return (
        <div
            key={i}
            className={`p-3 ${
                usingOn === "home" ? "pre-per-result" : "final-per-result"
            }`}
        >
            <div className="row d-flex flex-row">
                <div className="col-md-12 col-lg-6">
                    <div className="col">
                        <h3>
                            {result[4]} - {result[5]}
                        </h3>
                    </div>
                    <div className="col">
                        <p className="secondary-text name-year">
                            {result[0]} - {result[3].slice(-4)}
                        </p>
                    </div>
                </div>
                <div className="col-md-12 col-lg-6 text-break">
                    <h3 className="float-lg-start">{result[2]}</h3>
                </div>
            </div>
            <div className="row border-bottom px-3 py-1 mx-0"></div>
        </div>
    );
};

export default ResultsContainer;
