import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { time } from "console";

export type Times = {
  start: number;
  end: number;
};

export type SetDays = {
  id: number;
  day: number;
  start_end: Array<Times>;
};

export type DaysState = SetDays[];

let nextId = 1;
const initialState: DaysState = [];

export const timeSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    addDays: (state, action: PayloadAction<number>) => {
      state.push({ id: nextId++, day: action.payload, start_end: [] });
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
    // toggleTodo: (state, action: { id: number }) => {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   if (todo) {
    //     todo.check = !todo.check;
    //   }
    // },
  },
});

export const { addDays, addTimes } = timeSlice.actions;

export default timeSlice.reducer;
