import { combineReducers } from "redux";
import collectionReducer from "./collectionReducer";
import loginReducer from "./authReducer";

const reducers = combineReducers({
    collection : collectionReducer,
    auth: loginReducer
})

export default reducers;