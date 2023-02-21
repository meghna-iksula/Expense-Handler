import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredexpenseData) => {
    const expenseData = {
      ...enteredexpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const [addExpense, setAddExpense] = useState(false);

  const addExpenseHandler = () => {
    setAddExpense(true);
  };
  const cancelHandler = () => {
    setAddExpense(false);
  };

  return (
    <div className="new-expense">
      {addExpense ? ( // Same as "addExpense == true"
        <ExpenseForm
          onCancel={cancelHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      ) : (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
