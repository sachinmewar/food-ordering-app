import { useReducer } from 'react';
import cartContext from './cart-context';

const defaultCartState = {
   items: [],
   totalAmount: 0
};

const cartReducer = (initialState, action) => {
   if (action.type === 'ADD_ITEM') {
      const updatedItem = initialState.items.concat(action.item);
      const updatedAmount = initialState.totalAmount + action.item.amount
         * action.item.price;
      return ({
         items: updatedItem,
         totalAmount: updatedAmount
      }
      );
   }
   return defaultCartState;
   // case 'remove':
   //    const updatedItem = initialState; // remove
   //    const updatedAmount
   //    return {};
};
const CartProvider = (props) => {
   const [cartState, dispatchCartAction] = useReducer(
      cartReducer, defaultCartState
   );

   const addItemToCartHandler = (item) => {
      dispatchCartAction(
         {
            type: 'ADD_ITEM',
            item: item
         }
      );

   };
   const removeItemFromCartHandler = () => { };

   const cartValue = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
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