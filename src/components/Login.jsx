import React from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { useFormik } from 'formik';
import { Redirect } from 'react-router';

function Login() {
    const{login, isAuthenticated}=useAuth();
    const formik=useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            login(values);
        }
      });
  return (
      <form className="app-wrapper-log">
        {isAuthenticated && <Redirect to="/page"/>}
        
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
