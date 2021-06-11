// @flow
import * as React from "react";
import { Days } from "../../modules/days/days";
import styled from "styled-components";
import DayItem from "./DayItem";
import SelectTime from "./SelectTime";
import Button from "../common/Button";
const WeekandBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DayItemBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type DaysProps = {
  days: Days[];
  onToggle: (id: number) => void;
  onSetStart: (id: number) => void;
  onSetEnd: (id: number) => void;
  onAddTodo: (id: number) => void;
  onAddDays: (id: number) => void;
};
export const DaysList = ({
  days,
  onToggle,
  onSetEnd,
  onSetStart,
  onAddTodo,
  onAddDays,
}: DaysProps) => {
  return (
    <>
      <WeekandBlock>
        <DayItemBlock>
          {days.map((day) => (
            <DayItem
              key={day.id}
              day={day}
              onToggle={onToggle}
              onAddTodo={onAddTodo}
              onAddDays={onAddDays}
            ></DayItem>
          ))}
        </DayItemBlock>
        <div>
          <SelectTime onSetEnd={onSetEnd} onSetStart={onSetStart}></SelectTime>
        </div>
        <Button to="/time" cyan>
          다음
        </Button>
      </WeekandBlock>
    </>
  );
};
