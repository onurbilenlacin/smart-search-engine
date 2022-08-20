import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { resultReducer } from "./result.reducer";

const reducer = combineReducers({
    results: resultReducer
});

const middleware = [thunk];
const store = createStore(
    reducer,
    undefined,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
