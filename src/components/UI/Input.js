import './Input.css';
import React from 'react';

const Input = React.forwardRef((props, ref) => {
   return (
      <div className='input-container'>
         {
            //When used together with the <label> element, the for attribute specifies which form element a label is bound to.
            // htmlFor is like an id for every input.
         }
         <label htmlFor={props.input.id}>{props.label}</label>
         <input ref={ref} {...props.input} />
      </div>
   )
});

export default Input;