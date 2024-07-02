import React from "react";
import "./ExpensesItem.css";
import  ExpensesDate  from "../expensesDate/ExpensesDate";

export const ExpensesItem = ({ title, amount, date }) => {
  return (
    <div className="expense-item">
      <div className="container-text_date">
        <ExpensesDate date={date} />
        <h2>{title}</h2>
      </div>
      <div className="expense-item_description">
        <div className="expense-item_price">${amount}</div>
      </div>
    </div>
  );
};
