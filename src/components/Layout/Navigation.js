import { useState } from 'react';
import './Navigation.css';
import CartButton from './CartButton';
// import ProfileButton from './UserProfile/ProfileButton';
import Logout from '../../Authentication/Logout';

const Navigation = (props) => {

   const onButtonClickEventHandler = (value) => {
      props.onCartChange(value);
   }

   const onProfileButtonClickHandler = (value) => {
      props.onProfileClick(value);
   }

   return (
      <header className='navigation-container'>
         <p id='logo'> Food-order </p>
         <CartButton className='cart' onButtonClick={onButtonClickEventHandler} />
         {/* <ProfileButton onProfileClick={onProfileButtonClickHandler} /> */}
         <Logout keycloak={props.keycloak} />
      </header>
   );
};

export default Navigation;