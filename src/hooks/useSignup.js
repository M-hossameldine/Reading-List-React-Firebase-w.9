import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// firebase
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    // unset error
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: 'LOGIN', payload: res.user });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};
