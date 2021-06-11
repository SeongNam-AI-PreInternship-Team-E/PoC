import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type timeTable = {
  id: number;
  color: string;
  select: boolean;
};

export type DaysState = timeTable[];

let nextId = 1;
const initialState: any = [];

export const timetableSlice = createSlice({
  name: "days",
  initialState,
  reducers: {
    addTable: (state, action: PayloadAction<any>) => {
      state.push(action.payload);
    },
    // addTimes: (
    //   state,
    //   action: PayloadAction<{ id: number; set_time: Times }>
    // ) => {
    //   const todo = state.find((todo) => todo.id === action.payload.id);
    //   if (todo) {
    //     todo.start_end.push(action.payload.set_time);
    //   }
    // },
    // toggleTodo: (state, action: { id: number }) => {
    //   const todo = state.find((todo) => todo.id === action.payload);
    //   if (todo) {
    //     todo.check = !todo.check;
    //   }
    // },
  },
});

export const { addTable } = timetableSlice.actions;

export default timetableSlice.reducer;
