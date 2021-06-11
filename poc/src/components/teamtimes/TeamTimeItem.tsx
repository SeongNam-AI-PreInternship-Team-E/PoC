import { createPublicKey } from "crypto";
import React, { useEffect } from "react";

import styled from "styled-components";
import { Days } from "../../modules/days/days";
import { SetDays } from "../../modules/times/times";
import { TeamTimeIndex } from "./TeamTimeIndex";
const PageWrapper = styled.div`
  width: 5rem;
  flex-direction: row;
  align-items: center;
`;

const TimeBlock = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-left: 30px;
`;

type TimeProps = {
  time: any[] | any;
  onAddTeamTimes: (id: number, start: number, end: number) => void;
  onAddTeamAllTimes: (id: number, arr: any) => void;
  timeSet: any;
  startTime: number;
  onChangeColor: (id: number, arrnum: number) => void;
  indexofTime: number;
  teametimes: any;
  randArr: any;
};

export const TeamTimeItem = ({
  time,
  onAddTeamTimes,
  timeSet,
  onAddTeamAllTimes,
  startTime,
  onChangeColor,
  indexofTime,
  teametimes,
  randArr,
}: TimeProps) => {
  return (
    <PageWrapper>
      {console.log(time.all_times)}
      <TimeBlock>
        {time.all_times[0]
          ? time.all_times[0].map((sep: any) => (
              <TeamTimeIndex
                randArr={randArr}
                time={time}
                key={sep.index}
                onChangeColor={onChangeColor}
                indexofTime={indexofTime}
                sep={sep}
                teamtimes={teametimes}
              />
            ))
          : null}
      </TimeBlock>
    </PageWrapper>
  );
};
