import React from 'react';
import './Form.css';
import ExpenceForm from './ExpenceForm';

const Form = (props) => {

  const saveExpenseDataHandler =(enteredExpenseData) =>{
    const expenseData = {
      ...enteredExpenseData,
      id:Math.random().toString()
    }
    props.onAddExpense(expenseData);
   console.log(expenseData);
  };
  return (
   <>
   <div className="new-expense">
   <ExpenceForm  onSaveExpenseData={saveExpenseDataHandler}/>
   </div>
   </>
  )
}

export default Form