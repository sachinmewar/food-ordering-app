import './Navigation.css';
import CartButton from '../Cart/CartButton';
import Profile from './Profile';

const Navigation = () => {
   return (
      <header className='navigation-container'>
         <p id='logo'> Logo </p>
         <p id='location'> Location </p>
         <input type='search' id='search-bar' />
         <CartButton className='cart' />
         <Profile />
      </header>
   );
};

export default Navigation;