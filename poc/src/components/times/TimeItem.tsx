import { createPublicKey } from "crypto";
import React, { useEffect } from "react";

import styled from "styled-components";
import { Days } from "../../modules/days/days";
import { SetDays } from "../../modules/times/times";
import { TimeIndex } from "./TimeIndex";
const PageWrapper = styled.div`
  margin-top: 100px;
  width: 10%;
  flex-direction: row;
  align-items: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
`;

const TimeBlock = styled.li`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
`;

type TimeProps = {
  time: SetDays;
  onAddTimes: (id: number, start: number, end: number) => void;
  onAddAllTimes: (id: number, arr: any) => void;
  timeSet: any;
  startTime: number;
  onChangeColor: (id: number, arrnum: number) => void;
  indexofTime: number;
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
