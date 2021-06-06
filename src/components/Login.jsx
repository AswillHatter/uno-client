import React from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { useFormik } from 'formik';
//import { BrowserRouter, NavLink, Link } from 'react-router-dom';
//import './Auth.css'

function Login() {
    const{login}=useAuth();
    const formik=useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            //axios.post("http://127.0.0.1:8000/auth/token/", values);
            login(values);
        }
      });
  return (
      <form className="app-wrapper-log">

        
          <div> 
            Sign In
          </div>  
          <div>
            <input placeholder='e-mail'
            name="email"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.email}
            />
          </div>
          <div>
            <input placeholder='Password'
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />
          </div>
          <div>
            <button type="submit" onClick={formik.handleSubmit}>Sign in</button>
            <a href="/register">Sign up</a>
            {/* <Link to="/register"> Sign up </Link> */}
          </div>
        

      </form>
  );
}

export default Login;
