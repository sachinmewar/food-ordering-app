import { useState } from 'react';
import './ProfileButton.css';

const Profile = (props) => {
   const [showUserDetails, setShowUserDetails] = useState(true);
   const onClickProfileHandler = () => {
      setShowUserDetails(
         (state) => !state
      )
      props.onProfileClick(showUserDetails)
   }
   return (
      <div className='profile-button'>
         <button onClick={onClickProfileHandler}> Profile </button>
      </div>
   )
};

export default Profile;