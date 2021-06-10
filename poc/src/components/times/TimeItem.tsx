import { createPublicKey } from "crypto";
import React, { useState } from "react";
import styled from "styled-components";
import { Days } from "../../modules/days/days";
import { SetDays } from "../../modules/times/times";

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
  timeSet: any;
};

export const TimeItem = ({ time, onAddTimes, timeSet }: TimeProps) => {
  const [colors, setColors] = useState({ ...timeSet });
  const onChangeColor = (index: number) => {
    setColors((colors[index].color = "red"));
  };
  const onClick = () => {};
  return (
    <PageWrapper>
      <TimeBlock>
        {timeSet.map((sep: any) => (
          <Item
            key={sep.time}
            onClick={() => {
              onChangeColor(sep.time);
            }}
            style={{ color: `${sep.color}` }}
          >
            {sep.time}
          </Item>
        ))}
      </TimeBlock>
      <Item></Item>
    </PageWrapper>
  );
};
