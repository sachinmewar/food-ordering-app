
import { useState } from 'react';
import Navigation from './components/Navigation';
import Image from './components/Image'
import Food from './components/Food'
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const onCartChangeEventHandler = (value) => {
    setIsCartVisible(value);
  }
  const onClickCloseButtonHandler = (value) => {
    setIsCartVisible(value);
  };

  return (
    <CartProvider>
      <div>
        {isCartVisible && <Cart onClickClose={onClickCloseButtonHandler} />}
        <Navigation onCartChange={onCartChangeEventHandler} />
        <Image />
        <Food />
      </div>
    </CartProvider>
  );
};

export default App;