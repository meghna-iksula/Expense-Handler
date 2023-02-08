import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';

function Expenses(props) {
  const [year, setYear] = useState("2020");

  const selectedYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filtereditems = props.items.filter((item) => {
    return item.date.getFullYear().toString() === year; // == does type conversion before comparing, whereas === is strict equality which compares data as well as its type.
  });
  
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectedYear={selectedYearHandler} />
        <ExpensesChart expenses={filtereditems} />
        <ExpensesList items={filtereditems} />
      </Card>
    </div>
  );
}

export default Expenses;


// Alternate Method -
// {filtereditems.length === 0 && <p>No Expenses Found!</p>}
// {filtereditems.length > 0 && filtereditems.map((expense) => (
//   <ExpenseItem
//     key={expense.id}
//     title={expense.title}
//     amount={expense.amount}
//     date={expense.date}
//   />
// ))}