//AuthState is the context provider which provides state value to all the requesting component

import React, { useState, useEffect } from 'react'
import AuthContext from "./AuthContext.js";
import Router from "next/router";

const AuthState = (props) => {

  let [authTokens, setAuthTokens] = useState(null)
  let [user, setUser] = useState(null)
  let [loading, setLoading] = useState(true)     

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUser(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
      setAuthTokens(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null);
    }
  }, [authTokens, user])

  let logoutUser = () => {
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('authTokens')
    Router.push("/auth/login");
  }

  const contextData = {
    user:user,
    authTokens:authTokens,
    setAuthTokens:setAuthTokens,
    setUser:setUser,
    logoutUser:logoutUser,
  }

  useEffect(()=> {

      if(authTokens){
          setUser(jwt_decode(authTokens.access))
      }
      setLoading(false)

  }, [authTokens, loading])

  return (
    <AuthContext.Provider value={contextData}>       
        {loading ? null : props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;