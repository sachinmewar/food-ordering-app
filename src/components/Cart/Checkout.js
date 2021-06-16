import { useRef, useState } from 'react';
// import cartContext from '../../store/cart-context';
import classes from './Checkout.module.css'

const Checkout = props => {
   const [formInputsValidity, setFormInputValidity] = useState(
      {
         name: true,
         street: true,
         city: true,
         postalCode: true
      }
   );

   const nameInputRef = useRef('');
   const streetInputRef = useRef('');
   const postalCodeInputRef = useRef('');
   const cityInputRef = useRef('');
   var formIsValid = false;

   const onCancelHandler = () => {
      props.onCancel();
   }

   const confirmHandler = (event) => {
      event.preventDefault();
      const enteredName = nameInputRef.current.value;
      const enteredStreet = streetInputRef.current.value;
      const enteredPostalCode = postalCodeInputRef.current.value;
      const enteredCity = cityInputRef.current.value;

      const enteredNameIsValid = enteredName.trim() !== '';
      const enteredStreetIsValid = enteredStreet.trim() !== '';
      const enteredPostalCodeIsValid = enteredPostalCode.trim().length === 6
      const enteredCityIsValid = enteredCity.trim() !== ''

      setFormInputValidity(
         {
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postalCode: enteredPostalCodeIsValid
         }
      )

      event.preventDefault();
      if (enteredNameIsValid &&
         enteredStreetIsValid &&
         enteredPostalCodeIsValid &&
         enteredCityIsValid
      ) {
         formIsValid = true;
      }

      if (!formIsValid) {
         return;
      }

      props.onConfirm(
         {
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity
         }
      )
   }
   return (
      <form className={classes.form} onSubmit={confirmHandler}>
         <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid
            }`}>
            <label htmlFor='name'> Your Name </label>
            <input type='text' id='name' ref={nameInputRef} />
            {!formInputsValidity.name && <p> Please Enter a valid Name </p>}
         </div>
         <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid
            }`}>
            <label htmlFor='street'> Street </label>
            <input type='text' id='street' ref={streetInputRef} />
            {!formInputsValidity.street && <p> Please Enter a valid Street </p>}
         </div>
         <div className={`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid
            }`}>
            <label htmlFor='postal'> Postal Code </label>
            <input type='text' id='postal' ref={postalCodeInputRef} />
            {!formInputsValidity.postalCode && <p> Please Enter a valid Postal code </p>}
         </div>
         <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid
            }`}>
            <label htmlFor='city'> City </label>
            <input type='text' id='city' ref={cityInputRef} />
            {!formInputsValidity.city && <p> Please Enter a valid City </p>}
         </div>

         <div className={classes.actions}>
            <button className={classes.submit}> Confirm </button>
            <button type='button' onClick={onCancelHandler}> Cancel </button>
         </div>
      </form>
   );
}
export default Checkout;