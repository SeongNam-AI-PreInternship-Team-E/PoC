// @flow
import * as React from "react";
import { SetDays } from "../../modules/times/times";
import styled from "styled-components";
import { Days } from "../../modules/days/days";
import { TimeItem } from "./TimeItem";
const TimesBlock = styled.div``;
const DayBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

type TimesProps = {
  times: SetDays[];
  onAddTimes: (id: number, start: number, end: number) => void;
  avalibaleTime: number;
  timeSet: any;
};
export const TimesList = ({ times, onAddTimes, timeSet }: TimesProps) => {
  return (
    <>
      <TimesBlock>
        <DayBlock>
          {times.map((day) => (
            <TimeItem
              time={day}
              onAddTimes={onAddTimes}
              timeSet={timeSet}
            ></TimeItem>
          ))}
        </DayBlock>
      </TimesBlock>
    </>
  );
};
