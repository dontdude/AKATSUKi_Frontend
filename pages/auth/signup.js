import React, { useState, useContext } from 'react';
import Router from "next/router";
import Link from "next/link";
import axios from "axios";

import AuthContext from "../../context/AuthContext";         
import {toast} from "react-toastify";


const Signup = () => {

  const Context = useContext(AuthContext);        

  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // sends otp only when user in successfully registered
  const sendOTP = () => {
        
    axios.post('http://15.206.128.13:8081/send_otp', {
      email : email
    })
    .then(res => {                
      console.log(res);  
      toast(res.message, {
        type: "success"
      });
      // Redirect to verify otp page after a delay of 1 second
      async () => {
          await setTimeout(async () => {
            Router.push("/auth/verifyOTP");
          }, 1000);
      }
    })
    .catch(error => {
      console.log(error);
      toast(error.message, {
        type: "error"
      });
    });
  }

  // Send registration form details to api
  const handleSignUp = () => {
    
    axios.post('http://15.206.128.13:8081/signup', {
      email : email, 
      password : password,
      username : userName,
      name : name
    })
    .then(res => {                
      console.log(res); 
      sendOTP();  
      //Context.setUser({ email: res.user.email, username });
      //user authenticated in all pages, using context api
    })
    .catch(error => {
      console.log(error);
      toast(error.message, {
        type: "error"
      });
    });
  };

  const handleSubmit = e => {
    e.preventDefault();       //prevent page/component reload on form submit
    handleSignUp();
  };

//   if(Context.user?.username){      //user already authenticated
//     Router.push("/");
//   }

  return (
    <div className="min-h-screen bg-gradient-to-r from-red-500 to-gray-800 flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-gray-700 rounded-xl mx-auto shadow-lg overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center bg-stone-900 bg-[url('https://wallpaperaccess.com/full/1659825.jpg')]" >
            {/* <h1 className="text-orange-700 text-3xl mb-3">Welcome to AKATSUKi</h1>
            <div>
              <p className="text-orange-700">AKATSUKi is an anime and manga social networking and social cataloging webapp run by volunteers. The site provides its users with a list-like system to organize, review, suggest and score anime and manga.<a href="#" className="text-purple-500 font-semibold">Visit Home</a></p>
            </div> */}
          </div>
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2  className="text-3xl mb-4">Sign Up!</h2>
            <p className="mb-4">
              Create your account. It’s free and only take a minute
            </p>
            <form onSubmit={handleSubmit} >

              <div className="mt-5">
                <input 
                type="text" 
                name="name"
                value={name}
                onChange={e => setName(e.target.value)} 
                placeholder="Name" 
                className="border text-zinc-800 border-gray-400 py-1 px-2 w-full rounded-sm" 
                />
              </div>
              <div className="mt-5">
                <input 
                type="text" 
                name="username"
                value={userName}
                onChange={e => setUserName(e.target.value)} 
                placeholder="Username" 
                className="border text-zinc-800 border-gray-400 py-1 px-2 w-full rounded-sm" 
                />
              </div>
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

              <div className="mt-5">
                <button className="w-full bg-red-800 py-3 text-center text-white text-xl rounded-sm">Signup</button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;