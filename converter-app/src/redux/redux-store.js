import { applyMiddleware, combineReducers, createStore } from "redux";
import converterReducers from "./reducers/converter-reducers";
import {thunk} from "redux-thunk";

const thunkMiddleware = thunk;

let reducers = combineReducers({
    converter: converterReducers
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;