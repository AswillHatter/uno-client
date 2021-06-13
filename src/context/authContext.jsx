import axios from 'axios';
import PropTypes from 'prop-types';
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useHistory } from 'react-router-dom';
import {
  API_LOGIN_URL,
  API_REFRESH_URL,
  API_REGISTER_URL,
  API_URL
} from '../config/apiRoutes';

const authorizedInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

export const authContext = createContext();

export const useProvideAuth = () => {
  const tokenKey = 'refreshToken';
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(window.localStorage.getItem(tokenKey));
  const [isApiInstanceReady, setApiInstanceReady] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const history = useHistory();

  const isAuthenticated = Boolean(accessToken) || Boolean(refreshToken);

  const register = (data) => {
    authorizedInstance.post(API_REGISTER_URL, data )
    .then(() => {setIsRegistered(true)})
};

  const updateTokens = (access, refresh) => {
    window.localStorage.setItem(tokenKey, refresh);
    if (refresh) setRefreshToken(refresh);
    setAccessToken(access);
  };

  const login = (data) => authorizedInstance
    .post(API_LOGIN_URL, data)
    .then(({ data: { access, refresh }}) => { updateTokens(access, refresh)});

  const logout = () => {
    // history.push('/login')
    window.localStorage.removeItem(tokenKey);
    setRefreshToken(null);
    setAccessToken(null);
  };

   const refreshAccessToken = async (refresh_token) => {
    try {
      const res = await authorizedInstance.post(API_REFRESH_URL, {
        refresh: refresh_token,
      });
      updateTokens(res.data.access, refreshToken);
    } catch (error) {
      logout();
    }
  };

  useEffect(() => {
    if (accessToken) {

      authorizedInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

      setApiInstanceReady(true);
    } else if (refreshToken) {

      refreshAccessToken(refreshToken);
    } else {

      delete authorizedInstance.defaults.headers.common.Authorization;
      setApiInstanceReady(false);
    }
  }, [accessToken]);

  useEffect(() => {
    window.onstorage = (e) => {
      if (e.key !== tokenKey) {
        return;
      }

      const refreshTokenExists = Boolean(e.newValue);
      if (!refreshTokenExists) {
        logout();
      }

      if (isAuthenticated) {
        return;
      }

      if (!isAuthenticated && refreshTokenExists) {
        refreshAccessToken(e.newValue);
      }
    };
    return () => {
      window.onstorage = null;
    };
  }, [accessToken, refreshToken, isAuthenticated]);

  return {
    accessToken,
    apiInstance: authorizedInstance,
    isApiInstanceReady,
    isAuthenticated,
    login,
    logout,
    refreshToken,
    register,
    isRegistered,
    updateTokens,
  };
};

export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

ProvideAuth.propTypes = {
  children: PropTypes.element.isRequired,
};

export function useAuth() {
  return useContext(authContext);
}
