import { useEffect, useState } from "react";
import "./ExpenseForm.css";
import Button from "../UI/button/Button";
import { Input } from "../UI/input/Input";

export const ExpenseForm = ({ handleClick, onAddExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
 

  const handleNewExpense = () => {
    if (!title || !amount || !date) {
      alert("Please enter a new expense");
      return;
    }
    const newExpense = {
      title: title,
      amount: +amount,
      date: new Date(date),
      id: Date.now().toString(),
    };
    onAddExpense(newExpense);

    setTitle("");
    setAmount("");
    setDate("");
  };

 

  return (
    <form
      className="formContainer"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className="row">
        <label>
          Title
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Amount
          <Input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </label>
        <label>
          Date
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </div>
      <div className="buttonContainer">
        <Button onClick={() => handleClick()}>Cancel</Button>
        <Button type="submit" onClick={handleNewExpense}>
          Add Expenses
        </Button>
      </div>
    </form>
  );
};
