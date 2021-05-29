import { useState } from 'react';
import './CartButton.css'
// import { ShoppingCartOutlinedIcon as sco } from 'react-icons/io';

const Cart = (props) => {

   const onClickHandler = () => {
      props.onButtonClick(true);
   };

   return (
      <button onClick={onClickHandler}>
         <span> Cart </span>
         <span> </span>
         <span> 2 </span>
      </button>
   );
};

export default Cart;