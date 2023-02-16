import { combineReducers } from "redux";
import { employeeReducer } from "./userReducer";
export const rootReducer = combineReducers({
    employee: employeeReducer,
   });
