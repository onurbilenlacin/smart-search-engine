import { resultConstants } from "../constants";

export function resultReducer(state = {}, action) {
    switch (action.type) {
        case resultConstants.GET_RESULT_REQUEST:
            return {
                loading: true
            };
        case resultConstants.GET_RESULT_SUCCESS:
            return {
                loading: false,
                results: action.result
            };
        case resultConstants.GET_RESULT_FAILURE:
            return {
                error: action.error
            };
        case resultConstants.SET_RESULT_EMPTY:
            return {
                results: []
            };
        default:
            return state;
    }
}
