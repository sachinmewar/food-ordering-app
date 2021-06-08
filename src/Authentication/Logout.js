
// import keycloak from 'keycloak-js';
// import { useHistory } from 'react-router-dom';

const Logout = ({ keycloak }) => {
   // const history = useHistory();
   const onLogoutHandler = () => {
      // history.push('/');
      keycloak.logout();
      // logoutHandler(false);
   }

   return (
      <button onClick={onLogoutHandler} className='logout-button'> Logout </button>
   );
}

export default Logout;