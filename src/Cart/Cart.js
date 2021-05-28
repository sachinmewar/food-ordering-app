import './Cart.css';

const Cart = () => {
   const dummy_item = <ul>{[
      { id: 'm1', name: 'sushi', cost: 225 },
      { id: 'm1', name: 'chicken', cost: 225 }
   ].map(items => {
      <li> items </li>
   })}
   </ul>
   return (
      <div className='cart-container'>
         <div id='cartList'>
            {dummy_item}
            <span> Total Amount </span>
            <span>  450 </span>
         </div>

         <div className='cartbtns'>
            <button id='back'> Go Back </button>
            <button id='order'> Order </button>
         </div>

      </div>
   );
};

export default Cart;