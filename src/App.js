
import { useState } from 'react';
import Navigation from './components/Navigation';
import Image from './components/Image'
import Food from './components/Food'
import Cart from './Cart/Cart';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const onCartChangeEventHandler = (value) => {
    setIsCartVisible(value);
  }
  const onClickCloseButtonHandler = (value) => {
    setIsCartVisible(value);
  };

  return (
    <div>
      { isCartVisible && <Cart onClickClose={onClickCloseButtonHandler} />}
      <Navigation onCartChange={onCartChangeEventHandler} />
      <Image />
      <Food />
    </div>
  );
};

export default App;