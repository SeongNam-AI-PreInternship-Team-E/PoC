import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import TodoInsert from "../components/TodoInsert";
// import TodoList from "../components/TodoList";
import { RootState } from "../modules";
import type { Times } from "../modules/times/times";

import {
  addTeamAllTimes,
  addTeamTimes,
  toggleTeamColor,
} from "../modules/times/teamtimes";
import { TeamTimeList } from "../components/teamtimes/TeamTimeList";
function TeamTimesContainer() {
  const days = useSelector((state: RootState) => state.days);
  const times = useSelector((state: RootState) => state.times);
  const teamtimes = useSelector((state: RootState) => state.teamtimes);
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
  const onAddTeamAllTimes = useCallback(
    (id: number, arr: any) => {
      dispatch(addTeamAllTimes({ id, arr }));
    },
    [dispatch]
  );
  useEffect(() => {
    for (let i = 0; i <= size; i++) {
      onAddTeamAllTimes(i, timeSet);
    }
  }, [onAddTeamAllTimes]);

  const onChangeColor = (id: number, arrnum: number) => {
    dispatch(toggleTeamColor({ id, arrnum }));
  };

  const onAddTeamTimes = (id: number, start: number, end: number) => {
    const set_time: Times = { start, end };
    const number = { id, set_time };
    dispatch(addTeamTimes(number));
  };

  const timeSet = getSeperateTime(days.start_hour, days.end_hour);
  const avalibaleTime = days.end_hour - days.start_hour;
  const size = times.length;

  return (
    <>
      <TeamTimeList
        times={times}
        onAddTeamTimes={onAddTeamTimes}
        onAddTeamAllTimes={onAddTeamAllTimes}
        avalibaleTime={avalibaleTime}
        timeSet={timeSet}
        startTime={days.start_hour}
        onChangeColor={onChangeColor}
        teamtimes={teamtimes}
      ></TeamTimeList>
    </>
  );
}

export default TeamTimesContainer;
