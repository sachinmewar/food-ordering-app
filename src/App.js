import { useState } from 'react';
import Navigation from './components/Navigation';
import Image from './components/Image'
import Food from './components/Food'
import Cart from './Cart/Cart';
import CartProvider from './store/CartProvider';
import Auth from './Authentication/Auth'
import { BrowserRouter } from 'react-router-dom';
import UserDetails from './components/UserProfile/UserDetails';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  const onCartChangeEventHandler = (value) => {
    setIsCartVisible(value);
  }

  const onClickCloseButtonHandler = (value) => {
    setIsCartVisible(value);
  };

  const onProfileClickHandler = (value) => {
    setShowProfile(value);
  }


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
              <Navigation onCartChange={onCartChangeEventHandler} onProfileClick={onProfileClickHandler} />
              {showProfile && <UserDetails />}
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