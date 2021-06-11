import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Times = {
  start: number;
  end: number;
};

export type SetDays = {
  id: number;
  day: number;
  start_end: Array<Times>;
  all_times: Array<any>;
};

export type DaysState = SetDays[];

let nextId = 1;
const initialState: DaysState = [];

export const timeSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    addDays: (state, action: PayloadAction<number>) => {
      state.push({
        id: nextId++,
        day: action.payload,
        start_end: [],
        all_times: [],
      });
    },
    addTimes: (
      state,
      action: PayloadAction<{ id: number; set_time: Times }>
    ) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.start_end.push(action.payload.set_time);
      }
    },
    addAllTimes: (state, action: PayloadAction<{ id: number; arr: any }>) => {
      const time = state.find((time) => time.id === action.payload.id);
      if (time) {
        time.all_times.push(action.payload.arr);
      }
    },
    toggleColor: (
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
    // toggleTodo: (state, action: { id: number }) => {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   if (todo) {
    //     todo.check = !todo.check;
    //   }
    // },
  },
});

export const { addDays, addTimes, addAllTimes, toggleColor } =
  timeSlice.actions;

export default timeSlice.reducer;
