import { resultConstants } from "../constants";
import { resultService } from "../services";

export const resultActions = {
    getResult,
    setResultEmpty
};

function getResult() {
    return (dispatch) => {
        dispatch(request());

        resultService
            .getResult()
            .then((result) => {
                dispatch(success(result));
            })
            .catch((error) => {
                dispatch(failure(error));
            });
    };

    function request() {
        return { type: resultConstants.GET_RESULT_REQUEST };
    }
    function success(result) {
        return { type: resultConstants.GET_RESULT_SUCCESS, result };
    }
    function failure(error) {
        return { type: resultConstants.GET_RESULT_FAILURE, error };
    }
}

function setResultEmpty() {
    return {
        type: resultConstants.SET_RESULT_EMPTY
    };
}
