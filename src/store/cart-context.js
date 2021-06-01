import React from 'react';

const cartContext = React.createContext(
   {
      item: [],
      amount: 0,
      setItem: (item) => { },
      removeItem: (id) => { }
   }
)

export default cartContext;