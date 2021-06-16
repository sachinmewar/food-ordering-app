import './Cart.css';
import { useContext, useState } from 'react';
import cartContext from '../store/cart-context'
import CartItem from './CartItem.js'
import Checkout from './Checkout';

const Cart = (props) => {
   const [orderState, setOrderState] = useState(false);
   const cartCtx = useContext(cartContext);
   const totalAmount = `₹${cartCtx.totalAmount.toFixed(2)}`;
   const [isSubmitting, setIsSubmitting] = useState(false);

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
   }

   const has_items = cartCtx.items.length > 0;

   const onClickOrderHandler = () => {
      setOrderState(true);
   }

   const submitOrderHandler = (userData) => {
      setIsSubmitting(true);
      fetch('https://food-order-765a7-default-rtdb.firebaseio.com/orders.json',
         {
            method: 'POST',
            body: JSON.stringify(
               {
                  user: userData,
                  items: cartCtx.items,
               })
         })
      setIsSubmitting(false);
   }

   const actionButtons = <div className='cartbtns'>
      <button id='close' onClick={onClickHandler}> Close </button>
      {has_items && <button id='order' onClick={onClickOrderHandler} > Order </button>}
   </div>
   return (
      <div className='cart-container'>
         <div id='cart-list'>
            {cart_items}
            <div id='total'>
               <span> Total Amount </span>
               <span>  {totalAmount} </span>
            </div>
         </div>
         {orderState && !isSubmitting && <Checkout onConfirm={submitOrderHandler} onCancel={onClickHandler} />}
         {isSubmitting && <p> Loading... </p>}
         {!orderState && actionButtons}
      </div>
   );
};

export default Cart;
