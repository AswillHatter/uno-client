import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import './Auth.css';



function Auth() {
  return (
        <div className="App">

        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        	  
    </div>
  );
}

export default Auth;
