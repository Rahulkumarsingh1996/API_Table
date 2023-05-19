import React from 'react';
import Home from '../Home/Home';
import './ExpanceItem.css'

const ExpanceItem = (props) => {
  return (
    <div className='expenses'>
      {
        props.item.map(
          expense => (
            <Home key={expense.id}
              date={expense.date}
              title={expense.name}
              amount={expense.price}
            />
        )
        )
      }
    </div>
  )
}

export default ExpanceItem