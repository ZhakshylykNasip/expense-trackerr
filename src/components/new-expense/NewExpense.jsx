import React from "react";
import { useState } from "react";
import Button from "../UI/button/Button";
import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.css";

export const NewExpense = ({ onAddExpense }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleClick = () => {
    setIsFormOpen(!isFormOpen);
  };

  return (
    <div className="wrapper-form">
      {isFormOpen ? (
        <ExpenseForm handleClick={handleClick} onAddExpense={onAddExpense} />
      ) : (
        <div className="container-btn">
          <Button onClick={handleClick}>add a new Expense</Button>
        </div>
      )}
    </div>
  );
};
