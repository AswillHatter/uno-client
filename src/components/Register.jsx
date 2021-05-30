import { useFormik } from 'formik';
import React from 'react';
import { useAuth } from '../context/authContext';
//import { BrowserRouter, NavLink, Link } from 'react-router-dom';
//import './Register.module.css'

function Register() {
    const{register}=useAuth();
    const formik=useFormik({
        initialValues: {
            username: '',
            email: '',
            password1: '',
            password2: '',
        },
        onSubmit: (values) => {
            //console.log(values);
            register(values);

        },
      });    
    return (

        <form className="app-wrapper-log" >
        Sign Up
        <div>
            <input placeholder='login'
            name="username"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.username}
            />
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
            name="password1"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password1}
            />
        </div>
        <div>
            <input placeholder='Confirm password'
            name="password2"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password2}
            />
        </div>
        <div>
            <button type="submit" onClick={formik.handleSubmit}>Sign up</button>
            <a href="/login">Sign in</a>
            {/* <Link to="/login"> Sign in </Link> */}
        </div>
        </form>

  );
}

export default Register;
