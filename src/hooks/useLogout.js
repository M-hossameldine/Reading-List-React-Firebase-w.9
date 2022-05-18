// firebase
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';

export const useLogout = async () => {
  const logout = () => {
    signOut(auth)
      .then((res) => {
        console.log('user is logged out');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
