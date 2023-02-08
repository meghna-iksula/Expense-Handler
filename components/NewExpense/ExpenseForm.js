import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  // Method2: Handling multiple events with one state
  // const [userInput, setInput] =useState({
  //     title='';
  //     amount='';
  //     date='';
  // })
  //   const titleChangeHandler = (event) => {
  //     setInput({
  //       ...userInput,
  //       title: event.target.value,
  //     });
  //   };

  //   const amountChangeHandler = (event) => {
  //     setInput({
  //       ...userInput,
  //       amount: event.target.value,
  //     });
  //   };

  //   const dateChangeHandler = (event) => {
  //     setInput({
  //       ...userInput,
  //       date: event.target.value,
  //     });
  //   };

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Default behaviour of reloading of page on submit can be prevented by this.

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="tnumber"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-10"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

//mention type=button to prevent default behaviour i.e. type=submit bydefault.