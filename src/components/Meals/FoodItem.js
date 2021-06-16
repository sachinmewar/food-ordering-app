import './FoodItem.css';
import Amount from './Amount';
import FoodImage from './FoodImage';
import { useContext } from 'react';
import cartContext from '../../store/cart-context';

const FoodItem = (props) => {

   const cartCtx = useContext(cartContext);

   const price = '$${props.price.toFixed(w)}';
   const addToCartHandler = (amount) => {
      cartCtx.addItem({
         id: props.id,
         name: props.name,
         amount: amount,
         price: props.price
      }

      );
   }
   return (
      <div className='foodItem-container'>
         <FoodImage imgName={props.imgName} />
         <h2> {props.name} </h2>
         <div id='amount'> ₹{props.price} </div>
         <Amount addToCart={addToCartHandler} />
      </div>
   );
}

export default FoodItem;