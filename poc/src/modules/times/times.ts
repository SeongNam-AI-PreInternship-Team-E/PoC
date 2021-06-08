import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Times = {
  start: number;
  end: number;
};

export type Days = {
  id: number;
  day: number;
  start_end: [];
};

export type DaysState = Days[];

let nextId = 1;
const initialState: DaysState = [];

export const timeSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    addDays: (state, action: PayloadAction<number>) => {
      state.push({ id: nextId++, day: action.payload, start_end: [] });
    },
  },
});

export const { addDays } = timeSlice.actions;

export default timeSlice.reducer;
