import './Navigation.css';
import Cart from './Cart';
import Profile from './Profile';

const Navigation = () => {
   return (
      <header className='navigation-container'>
         <p id='logo'> Logo </p>
         <p id='location'> Location </p>
         <input type='search' id='search-bar' />
         <Cart className='cart' />
         <Profile />
      </header>
   );
};

export default Navigation;