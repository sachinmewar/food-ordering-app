import { useState } from 'react';
import Navigation from './components/Layout/Navigation';
import Image from './components/Meals/Image';
import Food from './components/Meals/Food'
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import Auth from './Authentication/Auth'
// import UserDetails from './components/UserProfile/UserDetails';

const App = () => {
  const [isCartVisible, setIsCartVisible] = useState(false);
  // const [showProfile, setShowProfile] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [keycloakValue, setKeycloakValue] = useState(null);
  const onCartChangeEventHandler = (value) => {
    setIsCartVisible(value);
  }

  const onClickCloseButtonHandler = (value) => {
    setIsCartVisible(value);
  };

  const onProfileClickHandler = (value) => {
    // setShowProfile(value);
  }

  const keycloakHandler = (IsAuthenticated, keycloak) => {
    setAuthenticated(IsAuthenticated);
    setKeycloakValue(keycloak);
  }
  return (
    <CartProvider>
      <div>
        <Auth keycloakValues={keycloakHandler} />
        {
          authenticated &&
          <div>
            {isCartVisible && <Cart onClickClose={onClickCloseButtonHandler} />}
            {!isCartVisible && <Navigation onCartChange={onCartChangeEventHandler}
              onProfileClick={onProfileClickHandler} keycloak={keycloakValue} />}
            {/* {showProfile && <UserDetails keycloak={keycloakValue} />} */}
            {!isCartVisible && < Image />}
            {!isCartVisible && < Food />}
          </div>
        }
      </div>
    </CartProvider>

  );
};

export default App;