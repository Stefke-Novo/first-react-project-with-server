import React from 'react';
import {Link} from 'react-router-dom';
const FormSuccess = () => {
    return (
        <div className='form-content-right'>
            <Link to="/pocetna">
            <div className='form-success'> Uspesno ste se registrovali! Kliknite ovaj tekst za natavak </div>
            </Link>
            <img src='success2.jpg' alt='success-image' className='form-img-2' />

        </div>
    )
}

export default FormSuccess
