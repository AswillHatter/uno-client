import React from 'react';
import axios from 'axios';
import { useAuth } from '../context/authContext';
import { useFormik } from 'formik';
import './GameCreator.css'


const GameCreator = () => {
    //const{newGame};
    const formik=useFormik({
        initialValues: {
            number: '',
        },
        onSubmit: (values) => {
            //axios.post("http://127.0.0.1:8000/auth/token/", values);
            //newGame(values);
        }
      });
    return (
        <form className='content'>
        <h2>New game</h2>
        <div>Number of players</div>

        <div><label class="container">Two
        <input type="radio" name="number" value="2" 
        onChange={formik.handleChange}
        value={formik.values.number}/>
        <span class="checkmark"></span>
        </label></div>
        <div><label class="container">Three
        <input type="radio" name="number" value="3"
        onChange={formik.handleChange}
        value={formik.values.number}/>
        <span class="checkmark"></span>
        </label></div>
        <div><label class="container">Four
        <input type="radio" name="number" value="4"
        onChange={formik.handleChange}
        value={formik.values.number}/>
        <span class="checkmark"></span>
        </label></div>
        
        <div>
            <button type="submit" onClick={formik.handleSubmit}>Create</button>
        </div>

        </form>
    );
}



export default GameCreator;