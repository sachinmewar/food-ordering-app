import { useState } from 'react';
import './Navigation.css';
import CartButton from '../Cart/CartButton';
import ProfileButton from './UserProfile/ProfileButton';

const Navigation = (props) => {

   const onButtonClickEventHandler = (value) => {
      props.onCartChange(value);
   }

   const onProfileButtonClickHandler = (value) => {
      props.onProfileClick(value);
   }

   return (
      <header className='navigation-container'>
         <p id='logo'> Logo </p>
         <p id='location'> Location </p>
         <input type='search' id='search-bar' />
         <CartButton className='cart' onButtonClick={onButtonClickEventHandler} />
         <ProfileButton onProfileClick={onProfileButtonClickHandler} />
      </header>
   );
};

export default Navigation;