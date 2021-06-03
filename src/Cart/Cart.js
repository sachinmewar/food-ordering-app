import './Cart.css';
import { useContext } from 'react';
import cartContext from '../store/cart-context'
import CartItem from './CartItem.js';

const Cart = (props) => {
   const cartCtx = useContext(cartContext);
   const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;

   const onItemRemoveHandler = (id) => {
      cartCtx.removeItem(id);
   };

   const onItemAddHandler = (item) => {
      cartCtx.addItem({ ...item, amount: 1 });
   };

   const cart_items = (
      <ul>
         {
            cartCtx.items.map(item => (
               <CartItem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  amount={item.amount}
                  price={item.price}

                  // bind ensures that the id of the to be added or removed
                  // item is passed here to remove handler.
                  // The bind pre-configure as a function for future execution
                  // and basically allow you to pre-configure the argument that
                  // function will receive when its being executed.

                  onItemRemove={onItemRemoveHandler.bind(null, item.id)}
                  onItemAdd={onItemAddHandler.bind(null, item)}
               />
            ))
         }
      </ul>
   );
   const onClickHandler = () => {
      props.onClickClose(false);
      console.log('false');
   }

   const has_items = cartCtx.items.length > 0;

   return (
      <div className='cart-container'>
         <div id='cartList'>
            {cart_items}
            <span> Total Amount </span>
            <span>  {totalAmount} </span>
         </div>

         <div className='cartbtns'>
            <button id='close' onClick={onClickHandler}> Close </button>
            {has_items && <button id='order'> Order </button>}
         </div>

      </div>
   );
};

export default Cart;