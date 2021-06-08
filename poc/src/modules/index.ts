import { combineReducers } from "redux";
import days from "./days/days";
import times from "./times/times";
const rootReducer = combineReducers({ days, times });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
