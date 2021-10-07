import { useContext } from 'react';
import AuthContext from '../auth/context';
import jwtDecode from 'jwt-decode';
import storage from '../auth/storage';

const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logIn = async (authToken) => {
    const user = jwtDecode(authToken);
    setUser(user);
    await storage.storeToken(authToken);
  };

  const logOut = () => {
    setUser(null);
    storage.removeToken();
  };
  return {
    user,
    logOut,
    logIn,
  };
};

export default useAuth;
