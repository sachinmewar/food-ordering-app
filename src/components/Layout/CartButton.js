import './CartButton.css'
import cartContext from '../../store/cart-context'
import { useContext } from 'react';
import CartIcon from './CartIcon.js';

const Cart = (props) => {

   const cartCtx = useContext(cartContext);
   const cartValue = cartCtx.items.length;

   const onClickHandler = () => {
      props.onButtonClick(true);
   };


   return (
      <button onClick={onClickHandler} class='cart-button'>
         <span> Cart </span>
         <span id='icon'> <CartIcon />  </span>
         <span id='value'> {cartValue} </span>
      </button>
   );
};

export default Cart;