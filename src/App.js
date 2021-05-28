import Navigation from './components/Navigation';
import Image from './components/Image'
import Food from './components/Food'
import Cart from './Cart/Cart'
const App = () => {
  return (
    <div>
      <Cart />
      <Navigation />
      <Image />
      <Food />
    </div>
  );
};

export default App;