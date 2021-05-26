import './Navigation.css';
import Cart from './Cart';

const Navigation = () => {
   return (
      <header>
         <p> Logo </p>
         <p> Location </p>
         <input type='search' />
         <Cart />
      </header>
   );
};

export default Navigation;