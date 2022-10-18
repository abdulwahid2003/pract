import user from "./reducer";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer=()=>{
    combineReducers({user})
}
export default rootReducer