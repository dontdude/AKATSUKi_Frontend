import React, { useState, useContext, useEffect } from 'react';
import { useRouter, withRouter } from "next/router";
import axios from "axios";
import jwt_decode from "jwt-decode";
import AuthContext from "../../context/AuthContext";         
import {toast} from "react-toastify";


const login = (props) => {

  const Router = useRouter();

  const Context = useContext(AuthContext); 
  const API_URL = process.env.NEXT_PUBLIC_API_URL;       

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {                         
    props.router.query?.email && setEmail(props.router.query?.email);      // sent email as query during router.push('/verify'), now to access this props import withRouter, and return this page within withRouter(verify)
  }, [props.router.query]);  
  

  const handleLogin = async (e) => {
    
    await axios.post(API_URL + '/auth/login', {
      email : email, 
      password : password
    })

    .then(res => {                
      console.log(res); 
      toast("Successfully logged In", {
        type: "success"
      });
      
      Context.setAuthTokens(res.data)                  
      console.log(jwt_decode(res.data.access_token))                            //user authenticated in all pages, using context api         
      localStorage.setItem('authTokens', JSON.stringify(res.data))           // access and refresh tokens stored in localStorage 
      
      Router.push({               
        pathname: '/',
        query: { email: email }
      }, '/');
    })

    .catch(error => {
      console.log(error);
      var errorMessage = error;
      if (error.response) {
        errorMessage = error.response.data.message;
        console.log("server responded");
      } else if (error.request) {
        errorMessage = error.message;
      } 
      
      toast(errorMessage, {
        type: "error"
      });
    });
  };

  const handleSubmit = e => {
    e.preventDefault();       //prevent page/component reload on form submit
    handleLogin();
  };

  if(Context.user){      //user already authenticated
    Router.push("/");
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-gray-800 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-gray-700 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="hidden lg:inline-grid w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-stone-900 bg-[url('https://wallpaperaccess.com/full/1659825.jpg')]" >
            {/* <h1 className="text-orange-700 text-3xl mb-3">Welcome to AKATSUKi</h1>
            <div>
              <p className="text-orange-700">AKATSUKi is an anime and manga social networking and social cataloging webapp run by volunteers. The site provides its users with a list-like system to organize, review, suggest and score anime and manga.<a href="#" className="text-purple-500 font-semibold">Visit Home</a></p>
            </div> */}
          </div>
          <div className="w-full lg:w-1/2 py-16 px-8">
            <h2 className="text-3xl mb-5">Login!</h2>
            {/* <pre className="mb-4">
              Forgot password? <a className='text-blue-400 font-semibold py-1 cursor-pointer' onClick={sendOTP}>Reset Password</a> 
            </pre> */}
            <form onSubmit={handleSubmit} >

              <div className="mt-5">
                <input 
                 type="email" 
                 name="email" 
                 value={email} 
                 onChange={e => setEmail(e.target.value)} 
                 placeholder="Email" 
                 className="border  text-zinc-800 border-gray-400 py-1 px-2 w-full rounded-sm" 
                />
              </div>
              <div className="mt-5">
                <input
                 type="password"
                 name="password"
                 value={password}
                 onChange={e => setPassword(e.target.value)}
                 placeholder="Password" 
                 className="border  text-zinc-800 border-gray-400 py-1 px-2 w-full rounded-sm" 
                 />
              </div>

              <div className="mt-8">
                <button className="w-full bg-red-800 py-3 text-center text-white text-xl rounded-sm">Login</button>
              </div>

              <div className="mt-3 flex justify-center">
                <pre className="mb-4">Don't have an account? <a className='text-blue-400 font-semibold py-1 cursor-pointer' href='/auth/signup'>Sign up</a></pre>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(login);     // to Receive router props passed in signup page