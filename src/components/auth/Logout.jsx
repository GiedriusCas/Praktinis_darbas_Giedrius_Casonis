import React from 'react'
import { useAuthCtx } from '../../store/AuthProvider'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

function Logout() {
    const { isLoggedIn, logout } = useAuthCtx();
    function logoutFire(){
        signOut(auth)
        .then(() => {
            logout();
        })
        .catch((error) => {

        })
    }
  return !isLoggedIn ? null : <button onClick={logoutFire}>Logout</button>;
}

export default Logout