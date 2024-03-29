import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
import { Expense } from "./components/Expenses/Expenses";

const DUMMY_DATA = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "New TV",
    amount: 1500,
    date: new Date(2021, 8, 2),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const onNewExpenseRender = (newExpense: Expense) => {
    setExpenses((expense) => {
      return [newExpense, ...expense];
    });
  };

  return (
    <div>
      <NewExpense onNewExpenseRender={onNewExpenseRender} />
      <Expenses item={expenses} />
    </div>
  );
};

export default App;
