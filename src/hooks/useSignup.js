import { useState } from 'react';

// firebase
import { auth } from '../firebase/config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = async (email, password) => {
    // unset error
    setError(null);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('user signed up', res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { error, signup };
};
