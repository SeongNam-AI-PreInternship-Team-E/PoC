import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TeamTimes = {
  start: number;
  end: number;
};

export type SetTeamDays = {
  id: number;
  day: number;
  start_end: Array<TeamTimes>;
  all_times: Array<any>;
};

export type DaysState = SetTeamDays[];

let nextId = 1;
const initialState: DaysState = [];

export const teamtimeSlice = createSlice({
  name: "teamdays",
  initialState,
  reducers: {
    addTeamDays: (state, action: PayloadAction<number>) => {
      state.push({
        id: nextId++,
        day: action.payload,
        start_end: [],
        all_times: [],
      });
    },
    addTeamTimes: (
      state,
      action: PayloadAction<{ id: number; set_time: TeamTimes }>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.start_end.push(action.payload.set_time);
      }
    },
    addTeamAllTimes: (
      state,
      action: PayloadAction<{ id: number; arr: any }>
    ) => {
      const time = state.find((time) => time.id === action.payload.id);
      if (time) {
        time.all_times.push(action.payload.arr);
      }
    },
    toggleTeamColor: (
      state,
      action: PayloadAction<{ id: number; arrnum: number }>
    ) => {
      const colors = state.find((color) => color.id === action.payload.id);
      if (colors) {
        if ((colors.all_times[0][action.payload.arrnum].color = "white")) {
          colors.all_times[0][action.payload.arrnum].color = "#5465FF";
          colors.all_times[0][action.payload.arrnum].select =
            !colors.all_times[0][action.payload.arrnum].select;
        } else {
          colors.all_times[0][action.payload.arrnum].color = "white";
          colors.all_times[0][action.payload.arrnum].select =
            !colors.all_times[0][action.payload.arrnum].select;
        }
      }
    },
  },
});

export const { addTeamAllTimes, addTeamDays, addTeamTimes, toggleTeamColor } =
  teamtimeSlice.actions;

export default teamtimeSlice.reducer;
