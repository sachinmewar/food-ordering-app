
// import keycloak from 'keycloak-js';
// import { useHistory } from 'react-router-dom';

const Logout = ({ keycloak, logoutHandler }) => {
   // const history = useHistory();
   const onLogoutHandler = () => {
      // history.push('/');
      keycloak.logout();
      logoutHandler(false);
   }

   return (
      <button onClick={onLogoutHandler}> Logout </button>
   );
}

export default Logout;