import './CartItem.css';

const CartItem = (props) => {

   return (
      <div className='cartItem__container'>
         <div> {props.name} </div>
         <div> {props.amount} </div>
         <div> ₹{props.price} </div>
         <button onClick={props.onItemAdd}> + </button>
         <button onClick={props.onItemRemove}> - </button>
      </div>
   );
}

export default CartItem;