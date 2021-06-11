// @flow
import React, { useEffect } from "react";
import { SetDays } from "../../modules/times/times";
import styled from "styled-components";
import { Days } from "../../modules/days/days";
import { TeamTimeItem } from "./TeamTimeItem";
const TimesBlock = styled.div``;
const DayBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-right: 2rem;
`;

type TimesProps = {
  times: any;
  onAddTeamTimes: (id: number, start: number, end: number) => void;
  avalibaleTime: number;
  timeSet: any;
  startTime: number;
  onAddTeamAllTimes: (id: number, arr: any) => void;
  onChangeColor: (id: number, arrnum: number) => void;
  teamtimes: any;
  randArr: any;
};
export const TeamTimeList = ({
  times,
  onAddTeamTimes,
  timeSet,
  startTime,
  onAddTeamAllTimes,
  onChangeColor,
  teamtimes,
  randArr,
}: TimesProps) => {
  return (
    <>
      <TimesBlock>
        <h1 style={{ margin: "2rem" }}>팀원 시간</h1>

        <DayBlock>
          {times.map((day: any) => (
            <TeamTimeItem
              randArr={randArr}
              teametimes={teamtimes}
              indexofTime={day.id}
              onChangeColor={onChangeColor}
              key={day.id}
              time={day}
              onAddTeamTimes={onAddTeamTimes}
              onAddTeamAllTimes={onAddTeamAllTimes}
              timeSet={timeSet}
              startTime={startTime}
            ></TeamTimeItem>
          ))}
        </DayBlock>
      </TimesBlock>
    </>
  );
};
