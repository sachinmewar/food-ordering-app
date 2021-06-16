import foodStore from '../../data/data';
import './FoodList.css';
import FoodItem from './FoodItem'
const FoodList = () => {

   const foodData = foodStore.map(foodDetails =>
      <FoodItem
         key={foodDetails.id}
         id={foodDetails.id}
         imgName={foodDetails.img}
         name={foodDetails.name}
         price={foodDetails.amount}
      />

   );
   return (
      <div className='foodList-container'>
         {foodData}
      </div>
   );
}

export default FoodList;