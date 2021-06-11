import styled from "styled-components";
import React, { useState } from "react";
import { setSourceMapRange } from "typescript";
const Item = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
`;

type TimeIndexProps = {
  onChangeColor: (id: number, arrnum: number) => void;
  sep: any;
  indexofTime: number;
  time: any;
};

export const TimeIndex = ({
  onChangeColor,
  sep,
  indexofTime,
  time,
}: TimeIndexProps) => {
  const [color, setColor] = useState("white");
  const onClick = () => {
    if (color === "white") setColor("#5465FF");
    else setColor("white");
    onChangeColor(indexofTime, sep.index);
  };
  return (
    <Item style={{ backgroundColor: `${color}` }} onClick={onClick}>
      {sep.time}
    </Item>
  );
};
