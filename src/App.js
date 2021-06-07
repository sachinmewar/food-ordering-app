
import { useState } from 'react';
import Navigation from './components/Navigation';
import Image from './components/Image'
import Food from './components/Food'
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';
import Auth from './Authentication/Auth'
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);

  const onCartChangeEventHandler = (value) => {
    setIsCartVisible(value);
  }
  const onClickCloseButtonHandler = (value) => {
    setIsCartVisible(value);
  };

  const [authenticated, setAuthenticated] = useState(false);

  const checkIfAuthenticated = (value) => {
    setAuthenticated(value)
  }
  return (
    <CartProvider>
      <BrowserRouter>
        <div>
          <Auth authenticated={checkIfAuthenticated} />
          {
            authenticated &&
            <div>
              {isCartVisible && <Cart onClickClose={onClickCloseButtonHandler} />}
              <Navigation onCartChange={onCartChangeEventHandler} />
              <Image />
              <Food />
            </div>
          }
        </div>
      </BrowserRouter>
    </CartProvider>

  );
};

export default App;