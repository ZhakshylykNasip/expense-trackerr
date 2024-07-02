import React, { useState } from "react";
import { ExpensesList } from "./expensesList/ExpensesList";
import Card from "../UI/card/Card";
import ExpensesFilter from "./expensesFilter/ExpensesFilter";
import {Chart} from "../chart/Chart"

export const Expenses = ({ expenses }) => {
  const [filteredByYear, setFiltredByYear] = useState("2023");

  const handleSelected = (event) => {
    setFiltredByYear(event.target.value);
  };

  const filteredExpenses = expenses.filter((item) => {
    const year = item.date.getFullYear().toString();
    return year === filteredByYear;
  });
  return (
    <Card>
      <ExpensesFilter value={filteredByYear} onChange={handleSelected} />
      <Chart expenses={ filteredExpenses}/>
      <ExpensesList expenses={filteredExpenses} />
    </Card>
  );
};
