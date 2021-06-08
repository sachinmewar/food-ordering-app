import { useEffect, useState } from 'react';

const UserInfo = ({ keycloak }) => {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [id, setId] = useState('');

   useEffect = (
      keycloak.loadUserInfo().then(
         userInfo => {
            setName(userInfo.name);
            setEmail(userInfo.email);
            setId(userInfo.id);
         }
      ), []);
   return (
      <div className="UserInfo">
         <p>Name: {name}</p>
         <p>Email: {email}</p>
         <p>ID: {id}</p>
      </div>
   );
}

export default UserInfo;