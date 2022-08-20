import React from "react";

const ResultsContainer = ({ result, i }) => {
    return (
        <div className="border-bottom py-2">
            <div className="row">
                <div className="col-md-12 col-lg-6">
                    <h3>
                        {result[4]} - {result[5]}
                    </h3>
                </div>
                <div className="col-md-12 col-lg-6">
                    <h3
                        className="float-lg-end
    "
                    >
                        {result[2]}
                    </h3>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p className="secondary-text">
                        {result[0]} - {result[3].slice(-4)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ResultsContainer;
