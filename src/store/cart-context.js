import React, { createContext } from 'react';

const cartContext = createContext(
   {
      item: [],
      amount: 0,
      setItem: (item) => { },
      removeItem: (id) => { }
   }
)

export default cartContext;