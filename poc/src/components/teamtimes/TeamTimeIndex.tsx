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
  randArr: any;
};

export const TeamTimeIndex = ({
  onChangeColor,
  sep,
  indexofTime,
  time,
  teamtimes,
  randArr,
}: TeamTimeIndexProps) => {
  const [color, setColor] = useState("white");
  const [opacity, setOpacity] = useState("100%");
  useEffect(() => {
    // let my_color = setColor(teamtimes[0].all_times[0][indexofTime].color);
    randArr.forEach((element: number) => {
      if (element === sep.index) {
        onChangeColor(indexofTime, sep.index);
      }
    });
    setColor(sep.color);
  }, [sep.color]);
  const onClick = () => {
    if (color === "white") {
      setColor("#5465FF");
      setOpacity("40%");
    } else {
      setColor("white");
    }
    onChangeColor(indexofTime, sep.index);
  };

  return (
    <>
      <Item
        onClick={onClick}
        style={{ opacity: `${opacity}`, backgroundColor: `${color}` }}
      >
        {sep.time}
      </Item>
    </>
  );
};
