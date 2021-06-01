import './CartButton.css'
import cartContext from '../store/cart-context'
import { useContext } from 'react';

const Cart = (props) => {

   const cartCtx = useContext(cartContext);
   const cartValue = cartCtx.items.length;

   const onClickHandler = () => {
      props.onButtonClick(true);
   };


   return (
      <button onClick={onClickHandler}>
         <span> Cart </span>
         <span> icon </span>
         <span> {cartValue} </span>
      </button>
   );
};

export default Cart;