import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import TodoInsert from "../components/TodoInsert";
// import TodoList from "../components/TodoList";
import { RootState } from "../modules";
import type { Times } from "../modules/times/times";
import { addDays, addTimes } from "../modules/times/times";
import { DaysList } from "../components/days/DaysList";
import { TimesList } from "../components/times/TimesList";
import { time } from "console";
function TimesContainer() {
  const days = useSelector((state: RootState) => state.days);
  const times = useSelector((state: RootState) => state.times);
  const dispatch = useDispatch();

  const onAddDays = (id: number) => {
    dispatch(addDays(id));
  };
  const onAddTimes = (id: number, start: number, end: number) => {
    const set_time: Times = { start, end };
    const number = { id, set_time };
    dispatch(addTimes(number));
  };
  const getSeperateTime = (start: number, end: number) => {
    let arr = [];
    for (let i = start; i <= end; i += 0.5) {
      arr.push({ time: i, color: "black" });
    }
    return arr;
  };
  const timeSet = getSeperateTime(days.start_hour, days.end_hour);
  const avalibaleTime = days.end_hour - days.start_hour;
  return (
    <>
      <TimesList
        times={times}
        onAddTimes={onAddTimes}
        avalibaleTime={avalibaleTime}
        timeSet={timeSet}
      ></TimesList>
    </>
  );
}

export default TimesContainer;
