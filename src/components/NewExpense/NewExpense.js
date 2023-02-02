import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){

function saveExpenseDataHandler(enteredExpenseData) {
const expenseData = {
    ...enteredExpenseData,
    id: Math.random().toString()
};
props.onAddExpense(expenseData);
setIsEditing(false);
};
const [isEditing, setIsEditing]= useState(false);
function startEditingHandler(){
 setIsEditing(true);   
};
function stopEditing (){
    setIsEditing(false);
}

return (
 <div className="new-expense">
  {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
  {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing} />}
 </div>
);
}

export default NewExpense;