import { createPublicKey } from "crypto";
import React, { useEffect } from "react";

import styled from "styled-components";
import { Days } from "../../modules/days/days";
import { SetDays } from "../../modules/times/times";
import { TimeIndex } from "./TimeIndex";
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
  time: SetDays;
  onAddTimes: (id: number, start: number, end: number) => void;
  onAddAllTimes: (id: number, arr: any) => void;
  timeSet: any;
  startTime: number;
  onChangeColor: (id: number, arrnum: number) => void;
  indexofTime: number;
  randArr: any;
};

export const TimeItem = ({
  time,
  onAddTimes,
  timeSet,
  onAddAllTimes,
  startTime,
  onChangeColor,
  indexofTime,
}: TimeProps) => {
  return (
    <PageWrapper>
      <TimeBlock>
        {timeSet.map((sep: any) => (
          <TimeIndex
            time={time}
            key={sep.index}
            onChangeColor={onChangeColor}
            indexofTime={indexofTime}
            sep={sep}
          />
        ))}
      </TimeBlock>
    </PageWrapper>
  );
};
