
import cartContext from './cart-context';

const CartProvider = (props) => {

   const addItemToCartHandler = () => { };
   const removeItemFromCartHandler = () => { };

   const cartValue = {
      items: [],
      totalAmount: 0,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler
   }

   return (
      <cartContext.Provider value={cartValue} >
         { props.children}
      </cartContext.Provider>
   )
};

export default CartProvider;