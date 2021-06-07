
import { useState, useEffect } from 'react';
import Keycloak from './keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';

const Auth = () => {
   const [keycloakValue, setKeycloakValue] = useState(null);
   const [IsAuthenticated, setIsAuthenticated] = useState();
   useEffect(() => {
      const keycloak = Keycloak('/keycloak.json');
      keycloak.init(
         {
            onLoad: 'login-required'
         }
      ).then(
         authenticated => {
            setKeyCloakValue(keycloak);
            setIsAuthenticatedState(authenticated)
         }
      )
   }, [])

   return (
      <div>
         <UserInfo keycloak={keycloakValue} />
         <Logout />
      </div>
   )
}

export default Auth;