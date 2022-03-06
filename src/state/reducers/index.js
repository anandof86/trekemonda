import { combineReducers } from "redux";
import collectionReducer from "./collectionReducer";

const reducers = combineReducers({
    collection : collectionReducer
})

export default reducers;