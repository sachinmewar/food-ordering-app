
import { useState, useEffect } from 'react';
import Keycloak from 'keycloak-js';

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
         }
      )
   }, [])
   props.keycloakValues(IsAuthenticated, keycloakValue)
   return null;
}

export default Auth;