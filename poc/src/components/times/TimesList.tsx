// @flow
import React, { useEffect } from "react";
import { SetDays } from "../../modules/times/times";
import styled from "styled-components";
import { Days } from "../../modules/days/days";
import { TimeItem } from "./TimeItem";
const TimesBlock = styled.div``;
const DayBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 2rem;
`;

type TimesProps = {
  times: SetDays[];
  onAddTimes: (id: number, start: number, end: number) => void;
  avalibaleTime: number;
  timeSet: any;
  startTime: number;
  onAddAllTimes: (id: number, arr: any) => void;
  onChangeColor: (id: number, arrnum: number) => void;
  randArr: any;
};
export const TimesList = ({
  times,
  onAddTimes,
  timeSet,
  startTime,
  onAddAllTimes,
  onChangeColor,
  randArr,
}: TimesProps) => {
  return (
    <>
      <TimesBlock>
        <h1 style={{ margin: "2rem" }}>나의 시간</h1>
        <DayBlock>
          {times.map((day) => (
            <TimeItem
              randArr={randArr}
              indexofTime={day.id}
              onChangeColor={onChangeColor}
              key={day.id}
              time={day}
              onAddTimes={onAddTimes}
              onAddAllTimes={onAddAllTimes}
              timeSet={timeSet}
              startTime={startTime}
            ></TimeItem>
          ))}
        </DayBlock>
      </TimesBlock>
    </>
  );
};
