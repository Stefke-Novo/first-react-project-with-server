import React,{useState} from 'react';
import FormSignup from './FormSignup';
import {Redirect} from 'react-router-dom';
import './Form.css';
import ProtectedRoute from './../ProtectedRoute';

const Form = () => {

    const[isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
        console.log("Provera je urađena ");
    }
   
    return (
        <div className='form-container'>
            <span className='close-btn'>x</span>
            <div className='form-content-left'>
                <img src='user.png' alt='user' className='form-img'/>
            </div>
            {!isSubmitted ? <FormSignup submitForm={submitForm}/> : <Redirect to="/pocetna" />}
        </div>
         
    );
};

export default Form
