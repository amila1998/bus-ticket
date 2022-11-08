import React, { createContext, useContext, useEffect, useState } from 'react';
import client from '../api/client';

const LoginContext = createContext();

const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(false);
  console.log("🚀 ~ file: LoginProvider.js ~ line 7 ~ LoginProvider ~ isLoggedIn", isLoggedIn)
  const [profile, setProfile] = useState({});
  console.log("🚀 ~ file: LoginProvider.js ~ line 11 ~ LoginProvider ~ profile", profile)

 useEffect(() => {
   const getUserDetails=async()=>{
    if(token){
        const res = await client.get('/api/auth/infor',{
            headers: { Authorization: token }
        })
        setProfile(res.data)
    }
  
   }
   if(isLoggedIn){
    getUserDetails();
   }
 }, [isLoggedIn,token])
 

  return (
    <LoginContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, profile, setProfile, token, setToken, }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);

export default LoginProvider;