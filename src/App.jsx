import  { useState } from "react";
import { NewExpense } from "./components/new-expense/NewExpense";
import { EXPENSES } from "./utils/constants";
import { Expenses } from "./components/expenses/Expenses";
import { Chart } from "./components/chart/Chart";


const App = () => {
  const [expenses, setExpenses] = useState(EXPENSES);
 
  console.log(expenses);

  const onAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };


 

  return (
    <div>
      <NewExpense onAddExpense={onAddExpense} />
     
      <Expenses expenses={expenses}/>
      
    </div>
  );
};
export default App;
