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
   );
}

export default CartItem;