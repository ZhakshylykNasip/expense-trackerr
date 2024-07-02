import React from "react";
import styled from "styled-components";
import { ChartBar } from "./ChartBar";

export const Chart = ({ expenses }) => {
  const maxPrice = 2000;
  const month = [
    {
      label: "Январь",
      currentPrice: 0,
    },
    {
      label: "Февраль",
      currentPrice: 0,
    },
    {
      label: "Март",
      currentPrice: 0,
    },
    {
      label: "Апрель",
      currentPrice: 0,
    },
    {
      label: "Май",
      currentPrice: 0,
    },
    {
      label: "Июнь",
      currentPrice: 0,
    },
    {
      label: "Июль",
      currentPrice: 0,
    },
    {
      label: "Август",
      currentPrice: 0,
    },
    {
      label: "Сентябрь",
      currentPrice: 0,
    },
    {
      label: "Октябрь",
      currentPrice: 0,
    },
    {
      label: "Ноябрь",
      currentPrice: 0,
    },
    {
      label: "Декабрь",
      currentPrice: 0,
    },
  ];
  expenses.forEach((item) => {
    const getMonth = item.date.getMonth();

    month[getMonth].currentPrice += item.amount;
  });

  return (
    <StyledChartContainer>
      {month.map((item) => (
        <ChartBar
          key={item.label}
          label={item.label}
          currentPrice={item.currentPrice}
          maxPrice={maxPrice}
        />
      ))}
    </StyledChartContainer>
  );
};

const StyledChartContainer = styled.div`
  width: 100%;
  height: 151px;
  padding: 1rem;
  background-color: #f8dfff;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
`;
