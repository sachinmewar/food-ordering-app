import { useState, useRef } from 'react';
import './Amount.css';
import React from 'react';
import Input from '../UI/Input';

const Amount = (props) => {
   const [amountIsValid, setAmountIsValid] = useState(true);
   const amountInputRef = useRef();

   const onSubmitHandler = (event) => {
      event.preventDefault();
      const enteredAmount = amountInputRef.current.value;
      const enteredAmountNumber = +enteredAmount;

      if (enteredAmount.trim().length === 0 ||
         enteredAmountNumber < 1 ||
         enteredAmountNumber > 10) {
         setAmountIsValid(false);
         return;
      }
      props.addToCart(enteredAmountNumber);
   };

   return (
      <div>
         <form className='amount-container' onSubmit={onSubmitHandler}>
            {
               // Here we are passing the properties via JS object.
            }
            <Input label='Amount'
               ref={amountInputRef}
               input={{
                  id: 'amount',
                  type: 'number',
                  min: '1',
                  max: '9',
                  step: '1',
                  defaultValue: '1'
               }}
            />
            <button id='add'> Add </button>
            {!amountIsValid && <p> Please enter valid amount </p>}
         </form>
      </div>
   );
}
export default Amount;

