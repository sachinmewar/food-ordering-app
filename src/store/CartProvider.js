import { useReducer } from 'react';
import cartContext from './cart-context';

const defaultCartState = {
   items: [],
   totalAmount: 0
};

const cartReducer = (initialState, action) => {
   if (action.type === 'ADD_ITEM') {
      const updatedTotalAmount = initialState.totalAmount + action.item.amount * action.item.price;

      const existingCartItemIndex = initialState.items.findIndex(item => (
         item.id === action.item.id
      ));

      const existingCartItem = initialState.items[existingCartItemIndex];
      let updatedItems;
      if (existingCartItem) {
         const updatedItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount
         }
         updatedItems = [...initialState.items]
         updatedItems[existingCartItemIndex] = updatedItem;
      }
      else {
         updatedItems = initialState.items.concat(action.item);
      }
      return ({
         items: updatedItems,
         totalAmount: updatedTotalAmount
      });
   }

   if (action.type === 'REMOVE_ITEM') {
      const existingCartItemIndex = initialState.items.findIndex(
         (item) => (
            item.id === action.id
         )
      )
      const existingItem = initialState.items[existingCartItemIndex];
      const updatedTotalAmount = initialState.totalAmount - existingItem.price;
      let updatedItems;

      // If we return true using filter than it will keep the item and if we return false
      // it will remove the item.
      if (existingItem.amount === 1) {
         updatedItems = initialState.items.filter(
            (item) => item.id !== action.id
         );
      }
      else {
         const updatedItem = {
            ...existingItem,
            amount: existingItem.amount - 1
         }
         updatedItems = [...initialState.items];
         updatedItems[existingCartItemIndex] = updatedItem;
      }
      return {
         items: updatedItems,
         totalAmount: updatedTotalAmount
      }
   }

   if (action.type === 'CLEAR') {
      return defaultCartState;
   }
   return defaultCartState;
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
   const removeItemFromCartHandler = (id) => {
      dispatchCartAction(
         {
            type: 'REMOVE_ITEM',
            id: id
         }
      );
   };

   const clearCartHandler = () => {
      dispatchCartAction({ type: 'CLEAR' })
   }

   const cartValue = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemToCartHandler,
      removeItem: removeItemFromCartHandler,
      clearCart: clearCartHandler
   }

   return (
      <cartContext.Provider value={cartValue} >
         {props.children}
      </cartContext.Provider>
   )
};

export default CartProvider;