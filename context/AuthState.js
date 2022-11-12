//AuthState is the context provider which provides state value to all the requesting component

import React, { useState } from 'react'
import AuthContext from "./AuthContext.js";

const AuthState = (props) => {

  const [authTokens, setAuthTokens] = useState(null);
  const [user, setUser] = useState(null);     //user is authenticated or not

  const loginUser = async(e) => {
     e.preventDefault();
     const response = fetch('http://15.206.116.25:8081/login', {
      method : 'POST',
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify({'email':null, 'password':null})
     })
  }

  const contextData = {
     loginUser:loginUser
  }

  return (
    <AuthContext.Provider value={{user, setUser}}>       
        {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;