import productosReducer from "./productosReducer";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
  productos: productosReducer,
});

export default rootReducer;
