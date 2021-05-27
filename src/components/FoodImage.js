import './FoodImage.css';

const FoodImage = (props) => {
   const address = '/Images/' + props.imgName + '.jpg';
   console.log(address);
   return (
      <div className='image-container'>
         <img src={address} alt='Error while loading' />
      </div>
   );
}

export default FoodImage;

