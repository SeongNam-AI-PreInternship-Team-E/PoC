import React from "react";
import { Days } from "../../modules/days/days";
import styled from "styled-components";
type DayItemProps = {
  day: Days;
  onToggle: (id: number) => void;
  onAddTodo: (id: number) => void;
  onAddDays: (id: number) => void;
};

const PageWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-between;
`;

const BoxElement = styled.div`
  margin-top: 2rem;
  padding: 2rem;
  display: flexbox;
  border: 1px solid black;
  border-radius: 1rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function DayItem({ day, onToggle, onAddTodo, onAddDays }: DayItemProps) {
  const handleToggle = () => {
    onToggle(day.id);
    onAddTodo(day.id);
    onAddDays(day.id);
  };

  return (
    <PageWrapper>
      {day.check ? (
        <BoxElement
          onClick={handleToggle}
          style={{ backgroundColor: "#5465FF" }}
        >
          {day.day}
        </BoxElement>
      ) : (
        <BoxElement onClick={handleToggle} style={{ background: "white" }}>
          {day.day}
        </BoxElement>
      )}
    </PageWrapper>
  );
}

export default DayItem;
