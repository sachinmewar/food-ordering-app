
import cartContext from '../store/cart-context';
import classes from './Checkout.module.css'

const Checkout = props => {

   const onCancelHandler = () => {
      props.onCancel();
   }

   const confirmHandler = (event) => {
      event.preventDefault();
   }
   return (
      <form className={classes.form} onSubmit={confirmHandler}>

         <div className={classes.control}>
            <label htmlFor='name'> Your Name </label>
            <input type='text' id='name' />
         </div>
         <div className={classes.control}>
            <label htmlFor='street'> Street </label>
            <input type='text' id='street' />
         </div>
         <div className={classes.control}>
            <label htmlFor='postal'> Postal Code </label>
            <input type='text' id='postal' />
         </div>
         <div className={classes.control}>
            <label htmlFor='city'> City </label>
            <input type='text' id='city' />
         </div>

         <div className={classes.actions}>
            <button className={classes.submit}> Confirm </button>
            <button type='button' onClick={onCancelHandler}> Cancel </button>
         </div>
      </form>
   );
}
export default Checkout;