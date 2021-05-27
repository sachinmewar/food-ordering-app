import './FoodItem.css';
import Amount from './Amount';
import FoodImage from './FoodImage';
const FoodItem = (props) => {
   return (
      <div className='foodItem-container'>
         <FoodImage imgName={props.imgName} />
         <h2> {props.name} </h2>
         <div id='amount'> ₹{props.amount} </div>
         <Amount />
      </div>
   );
}

export default FoodItem;