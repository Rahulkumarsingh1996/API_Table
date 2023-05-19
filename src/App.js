import React,{useState,useEffect} from 'react';
import Form from './Expance_Tracker/Form/Form';
import ExpanceItem from './Expance_Tracker/Item/ExpanceItem';

let dummy_expenses = [];



function App(props) {

  const [expenses, setExpenses] = useState(dummy_expenses);



  useEffect( () => {
    fetch('https://api.sampleapis.com/beers/ale').then(
      response =>{
        return response.json();
      }
    ).then(
      data =>{
        // console.log(data);
        setExpenses(data);
      }
    );
  }, []);
 

  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense , ...expenses];
    setExpenses(updatedExpense);
  };

  return (
    <>
    <h1 className='text-center mt-3 mb-5 fst-italic fw-bold text-decoration-underline text-white-50'>React fetch data from API and display in a table</h1>
     <Form  onAddExpense={addExpenseHandler}/>
    <ExpanceItem item={expenses}/>
    </>
  );
}

export default App;



  
  // {
  //   id:'e1',
  //   title:'school Fee',
  //   amount:300,
  //   date:new Date(2023 , 5, 17)
  // },
  // {
  //   id:'e2',
  //   title:'Books Fee',
  //   amount:400,
  //   date:new Date(2023 , 4, 18)
  // },
  // {
  //   id:'e3',
  //   title:'ZYM Fee',
  //   amount:500,
  //   date:new Date(2023 , 3, 12)
  // },
  // {
  //   id:'e4',
  //   title:'House Rent',
  //   amount:600,
  //   date:new Date(2023 , 3, 10)
  // }
