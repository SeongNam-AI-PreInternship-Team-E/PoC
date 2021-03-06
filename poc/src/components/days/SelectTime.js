import React from "react";
import Select from "react-select";
import styled from "styled-components";
import { setEndHour } from "../../modules/days/days";
const SelectBlock = styled.div`
  flex-direction: column;
  margin-top: 2rem;
`;
function SelectTime({ onSetEnd, onSetStart }) {
  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
    { value: 5, label: 5 },
    { value: 6, label: 6 },
    { value: 7, label: 7 },
    { value: 8, label: 8 },
    { value: 9, label: 9 },
    { value: 10, label: 10 },
    { value: 11, label: 11 },
    { value: 12, label: 12 },
    { value: 13, label: 13 },
    { value: 14, label: 14 },
    { value: 15, label: 15 },
    { value: 16, label: 16 },
    { value: 17, label: 17 },
    { value: 18, label: 18 },
    { value: 19, label: 19 },
    { value: 20, label: 20 },
    { value: 21, label: 21 },
    { value: 22, label: 22 },
    { value: 23, label: 23 },
    { value: 24, label: 24 },
  ];
  const SetEndHour = (e) => {
    const number = Number(e.value);
    onSetEnd(number);
  };
  const SetStartHour = (e) => {
    const number = Number(e.value);
    onSetStart(number);
  };
  return (
    <div>
      <SelectBlock>
        <div>Start Hour : </div>
        <Select
          options={options}
          onChange={SetStartHour}
          defaultValue={6}
        ></Select>
      </SelectBlock>
      <SelectBlock>
        <div>End Hour : </div>
        <Select options={options} onChange={SetEndHour} defaultValue={24} />
      </SelectBlock>
    </div>
  );
}

export default SelectTime;
