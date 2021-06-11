import { combineReducers } from "redux";
import days from "./days/days";
import times from "./times/times";
import teamtimes from "./times/teamtimes";
const rootReducer = combineReducers({ days, times, teamtimes });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
