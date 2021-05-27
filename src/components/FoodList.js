import foodStore from '../data/data';
import './FoodList.css';
import FoodItem from './FoodItem'
const FoodList = () => {

   const foodData = foodStore.map(foodDetails =>
      <FoodItem
         key={foodDetails.name}
         imgName={foodDetails.img}
         name={foodDetails.name}
         amount={foodDetails.amount}
      />

   );
   return (
      <div className='foodList-container'>
         {foodData}
      </div>
   );
}

export default FoodList;