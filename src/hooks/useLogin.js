/*
 * hook to handle login / signin requests to firebase auth service
 */

import { useState } from 'react';

// firebase
import { auth } from '../firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    // reset error
    setError(null);

    // send login request to firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('User is logged in');
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, login };
};
