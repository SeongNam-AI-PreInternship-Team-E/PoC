import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { setSourceMapRange } from "typescript";
import teamtimes from "../../modules/times/teamtimes";
import { stringify } from "querystring";
const Item = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid black;
  text-align: center;
  cursor: pointer;
`;

type TeamTimeIndexProps = {
  onChangeColor: (id: number, arrnum: number) => void;
  sep: any;
  indexofTime: number;
  time: any;
  teamtimes: any;
};

export const TeamTimeIndex = ({
  onChangeColor,
  sep,
  indexofTime,
  time,
  teamtimes,
}: TeamTimeIndexProps) => {
  const [color, setColor] = useState("white");
  useEffect(() => {
    // let my_color = setColor(teamtimes[0].all_times[0][indexofTime].color);

    setColor(sep.color);
  }, [sep.color]);
  const onClick = () => {
    if (color === "white") setColor("#5465FF");
    else setColor("white");
    onChangeColor(indexofTime, sep.index);
  };
  return (
    <>
      <Item style={{ backgroundColor: `${color}` }}>{sep.time}</Item>
    </>
  );
};
