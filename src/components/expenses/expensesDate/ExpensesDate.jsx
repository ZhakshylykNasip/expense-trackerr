import React from "react";
import "./ExpensesDate.css";

export default function ExpensesDate({ date }) {
  const month = date.toLocaleString("ru-Us", { month: "long" });
  const day = date.toLocaleString("ru-Us", { day: "2-digit" });
  const year = date.getFullYear().toString();

  return (
    <div className="expense-date">
      <h2 className="expense-mouth">{month}</h2>
      <h2 className="expense-year">{year}</h2>
      <h2 className="expense-day">{day}</h2>
    </div>
  );
}
