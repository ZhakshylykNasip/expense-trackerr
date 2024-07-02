import React from "react";
import { ExpensesItem } from "../expensesItem/ExpensesItem";

export const ExpensesList = ({ expenses }) => {
  return (
    <div>
      {expenses?.map((item) => (
        <ExpensesItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          key={item.id}
        />
      ))}
    </div>
  );
};
