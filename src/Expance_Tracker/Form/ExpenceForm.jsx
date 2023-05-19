import React,{useState} from 'react';
import './ExpenceForm.css'

const ExpenceForm = (props) => {

    const [enteredTitle,setEnteredTitle]=useState();
    const [enteredAmount,setEnteredAmount]=useState();
    const [enteredDate,setEnteredDate]=useState();

    const titleChangeHandlerc = (event) => {
        setEnteredTitle(event.target.value);
    };
    const amountChangeHandlerc = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandlerc = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event)=>{
        event.preventDefault();

        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date:new Date(enteredDate)
        }

         props.onSaveExpenseData(expenseData);


        console.log(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        {/* <label >Title</label> */}
                        <input type="text" value={enteredTitle} onChange={titleChangeHandlerc }
                        placeholder='Enter your Name' className='text-center'/>
                    </div>

                    <div className="new-expense__control">
                        {/* <label >Amount</label> */}
                        <input type="number" value={enteredAmount} min="0.01" step="0.01" 
                        onChange={amountChangeHandlerc}  placeholder='Enter your Amount' className='text-center'/>
                    </div>

                    {/* <div className="new-expense__control">
                        <label >Date</label>
                        <input type="Date" value={enteredDate}  onChange={dateChangeHandlerc}/>
                    </div> */}
                </div>

                <div className="new-expense__action">
                    <button type="submit">
                        Add Expense
                    </button>
                </div>
            </form>
        </>
    )
}

export default ExpenceForm