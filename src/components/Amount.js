import { useState } from 'react';
import './Amount.css';
import React from 'react';
import Input from '../UI/Input';

const Amount = (props) => {
   const [amount, setAmount] = useState('');

   const onChangeEventHandler = (event) => {
      setAmount(event.target.value);
   };

   return (
      <form className='amount-container'>
         {
            // Here we are passing the properties via JS object.
         }
         <Input label='Amount'
            input={{
               id: 'amount_' + props.id,
               min: 1,
               max: 10,
               step: 1,
               defaultValue: '1'
            }}
         />
         <button id='add'> Add </button>
      </form>
   );
}
export default Amount;

