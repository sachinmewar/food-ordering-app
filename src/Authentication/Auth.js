
import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';
import UserInfo from './UserInfo';
import Logout from './Logout';

const Auth = (props) => {

   const [keycloakValue, setKeycloakValue] = useState(null);
   const [IsAuthenticated, setIsAuthenticated] = useState(false);
   useEffect(() => {
      const keycloak = Keycloak('/keycloak.json');
      keycloak.init(
         {
            onLoad: 'login-required'
         }
      ).then(
         authenticated => {
            setKeycloakValue(keycloak);
            setIsAuthenticated(authenticated);
            props.authenticated(authenticated);
         }
      )
   }, [])

   props.authenticated(IsAuthenticated);

   return (
      <div>
         {
            IsAuthenticated &&
            <UserInfo keycloak={keycloakValue} /> &&
            <Logout keycloak={keycloakValue} logout={props.authenticated} />
         }
      </div>
   )
}

export default Auth;