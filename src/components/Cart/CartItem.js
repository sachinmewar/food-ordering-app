import './CartItem.css';
const CartItem = (props) => {

   return (
      <div className='cart-item__container'>
         <h2> {props.name} </h2>
         <div id='price'> ₹{props.price} </div>
         <button onClick={props.onItemRemove}> - </button>
         <div id='amount'> {props.amount} </div>
         <button onClick={props.onItemAdd}> + </button>
      </div>
      // <li className={classes['cart-item']}>
      //    <div>
      //       <h2>{props.name}</h2>
      //       <div className={classes.summary}>
      //          <span className={classes.price}>{props.price}</span>
      //          <span className={classes.amount}>x {props.amount}</span>
      //       </div>
      //    </div>
      //    <div className={classes.actions}>
      //       <button onClick={props.onItemRemove}>−</button>
      //       <button onClick={props.onItemAdd}>+</button>
      //    </div>
      // </li>
   );
}

export default CartItem;

