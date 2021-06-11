import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import TodoInsert from "../components/TodoInsert";
// import TodoList from "../components/TodoList";
import { RootState } from "../modules";
import {
  toggleDays,
  setStartHour,
  setEndHour,
  addTodo,
} from "../modules/days/days";
import { addTeamDays } from "../modules/times/teamtimes";
import { addDays } from "../modules/times/times";
import { DaysList } from "../components/days/DaysList";
function DaysContainer() {
  const days = useSelector((state: RootState) => state.days);
  const time = useSelector((state: RootState) => state.times);
  const dispatch = useDispatch();
  const onAddTodo = (id: number) => {
    dispatch(addTodo(id));
  };
  const onToggle = (id: number) => {
    dispatch(toggleDays(id));
  };
  const onSetStart = (id: number) => {
    dispatch(setStartHour(id));
  };
  const onSetEnd = (id: number) => {
    dispatch(setEndHour(id));
  };

  const onAddDays = (id: number) => {
    dispatch(addDays(id));
    dispatch(addTeamDays(id));
  };

  return (
    <>
      <DaysList
        onToggle={onToggle}
        onAddTodo={onAddTodo}
        days={days.Days}
        onSetEnd={onSetEnd}
        onSetStart={onSetStart}
        onAddDays={onAddDays}
      ></DaysList>
    </>
  );
}

export default DaysContainer;
