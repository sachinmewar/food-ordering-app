
import Logout from '../../Authentication/Logout';
import UserInfo from '../../Authentication/UserInfo';
import './UserDetails.css';
const UserDetails = ({ keycloak }) => {
   return (
      <div className='user-details'>
         <div> Image </div>
         <UserInfo keycloak={keycloak} />
         <Logout keycloak={keycloak} />
      </div>
   )
}

export default UserDetails;