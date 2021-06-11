import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import TodoInsert from "../components/TodoInsert";
// import TodoList from "../components/TodoList";
import { RootState } from "../modules";
import type { Times } from "../modules/times/times";
import {
  addDays,
  addTimes,
  addAllTimes,
  toggleColor,
} from "../modules/times/times";
import {
  addTeamAllTimes,
  addTeamTimes,
  toggleTeamColor,
} from "../modules/times/teamtimes";
import { TimesList } from "../components/times/TimesList";
function TimesContainer() {
  const days = useSelector((state: RootState) => state.days);
  const times = useSelector((state: RootState) => state.times);
  const team = useSelector((state: RootState) => state.teamtimes);
  const dispatch = useDispatch();
  const getSeperateTime = useCallback((start: number, end: number) => {
    let arr = [];
    let index = 0;
    for (let i = start; i <= end; i += 0.5) {
      arr.push({ time: i, color: "white", index, select: false });
      index++;
    }
    return arr;
  }, []);
  const timeSet = getSeperateTime(days.start_hour, days.end_hour);
  const onAddTimes = (id: number, start: number, end: number) => {
    const set_time: Times = { start, end };
    const number = { id, set_time };
    dispatch(addTimes(number));
    dispatch(addTeamTimes(number));
  };
  const onAddAllTimes = useCallback(
    (id: number, arr: any) => {
      dispatch(addAllTimes({ id, arr }));
    },
    [dispatch]
  );
  const onAddTeamAllTimes = useCallback(
    (id: number, arr: any) => {
      dispatch(addTeamAllTimes({ id, arr }));
    },
    [dispatch]
  );
  useEffect(() => {
    for (let i = 0; i <= size; i++) {
      onAddAllTimes(i, timeSet);
      onAddTeamAllTimes(i, timeSet);
    }
  }, [onAddAllTimes]);
  const onChangeColor = (id: number, arrnum: number) => {
    dispatch(toggleTeamColor({ id, arrnum }));
    dispatch(toggleColor({ id, arrnum }));
  };

  const avalibaleTime = days.end_hour - days.start_hour;
  const size = times.length;

  return (
    <>
      <TimesList
        randArr={1}
        times={times}
        onAddTimes={onAddTimes}
        onAddAllTimes={onAddAllTimes}
        avalibaleTime={avalibaleTime}
        timeSet={timeSet}
        startTime={days.start_hour}
        onChangeColor={onChangeColor}
      ></TimesList>
    </>
  );
}

export default TimesContainer;
