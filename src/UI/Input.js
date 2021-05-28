import './Input.css';

const Input = (props) => {
   return (
      <div className='input-container'>
         {
            //When used together with the <label> element, the for attribute specifies which form element a label is bound to.
            // htmlFor is like an id for every input.
         }
         <label htmlFor={props.input.id}>{props.label}</label>
         <input {...props.input} />
      </div>
   )
};

export default Input;