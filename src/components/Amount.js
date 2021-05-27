import { useState } from 'react';
import './Amount.css';
import React from 'react';


const Amount = () => {
   const [amount, setAmount] = useState('');

   const onChangeEventHandler = (event) => {
      setAmount(event.target.value);
   };

   return (
      <div className='amount-container'>
         <span id='amount'> Amount </span>
         <input type='number' value={amount} min='1' max='10' onChange={onChangeEventHandler} />
         <button id='add'> Add </button>
      </div>
   );
}
export default Amount;

