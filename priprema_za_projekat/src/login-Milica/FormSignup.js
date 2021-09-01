import React,{useState} from 'react'
import useForm from './useForm'
import validate from './validateInfo'
import './Form.css'
import Axios from 'axios';
import {Redirect} from 'react-router-dom';
const FormSignup = ({submitForm}) => {

    const{handleChange,values, handleSubmit, errors} = useForm(submitForm,validate);

    const[button,clickButton] = useState(false);

    const[registrovan,promeniRegistrovan]=useState(null);

    const registrujteSe=()=>{
            Axios.post("http://localhost:3100/create11",values).then(console.log("Uspešno poslati podaci"));
    }

    const ulogujteSe=()=>{
        Axios.post("http://localhost:3100/login",values)
        .then((response)=>{promeniRegistrovan(response.data);console.log(response.data)});
    };

    if (button === false){
            return (
                <div className = 'form-content-right'>
                    <form className='form' onSubmit={handleSubmit}>
                        <h1> Napravite svoj nalog popunjavanjem sledecih polja: </h1>
                        <div className='form-inputs'>
                            <label htmlFor='ime' className='form-label'>
                                Ime
                            </label>
                            <input 
                                id='ime' 
                                type = 'text' 
                                name='ime' 
                                className='form-input' 
                                placeholder='Unesite vase ime' 
                                value={values.ime}
                                onChange={handleChange}
                            />
                            {errors.ime && <p> {errors.ime} </p>}
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='prezime' className='form-label'>
                                Prezime
                            </label>
                            <input 
                                id='prezime' 
                                type = 'text' 
                                name='prezime' 
                                className='form-input' 
                                placeholder='Unesite vase prezime'
                                value={values.prezime}
                                onChange={handleChange}
                            />
                            {errors.prezime && <p> {errors.prezime} </p>}
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='email' className='form-label'>
                            Email
                            </label>
                            <input 
                                id='email' 
                                type='email' 
                                name='email' 
                                className='form-input' 
                                placeholder='Unesite vasu email adresu'
                                value={values.email}
                                onChange={handleChange}
                            />
                            {errors.email && <p> {errors.email} </p>}
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='username' className='form-label'>
                                Korisnicko ime
                            </label>
                            <input 
                                id='usrename' 
                                type = 'text' 
                                name='username' 
                                className='form-input' 
                                placeholder='Unesite vase korisnicko ime'
                                value={values.username}
                                onChange={handleChange}
                            />
                            {errors.username && <p> {errors.username} </p>}
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='password' className='form-label'>
                            Sifra
                            </label>
                            <input 
                                id='password' 
                                type='password' 
                                name='password' 
                                className='form-input' 
                                placeholder='Unesite vasu sifru'
                                value={values.password}
                                onChange={handleChange}
                            />
                            {errors.password && <p> {errors.password} </p>}
                        </div>
                        <div className='form-inputs'>
                            <label htmlFor='password2' className='form-label'>
                            Potvrdite sifru
                            </label>
                            <input 
                                id='password2' 
                                type='password' 
                                name='password2' 
                                className='form-input' 
                                placeholder='Unesite vasu sifru'
                                value={values.password2}
                                onChange={handleChange}
                            />
                            {errors.password2 && <p> {errors.password2} </p>}
                        </div>
                        <button className='form-input-btn' type='submit' onClick={registrujteSe}> Registruj se </button>
                        <span className='form-input-login'>
                            Vec imate nalog? Ulogujte se <button onClick={()=>{clickButton(!button);}} className='login-btn'> ovde 
                            </button> 
                        </span>

                    </form>

                </div>
        );
    }
    else {
        return(
            <div className = 'form-content-right'>
                <form className='form' onSubmit={handleSubmit}>
                    <h1> Ulogujte se popunjavanjem sledecih polja: </h1>
                    <div className='form-inputs'>
                        <label htmlFor='username' className='form-label'>
                            Korisnicko ime
                        </label>
                        <input 
                            id='usrename' 
                            type = 'text' 
                            name='username' 
                            className='form-input' 
                            placeholder='Unesite vase korisnicko ime'
                            value={values.username}
                            onChange={handleChange}
                        />
                        {errors.username && <p> {errors.username} </p>}
                    </div>
                    <div className='form-inputs'>
                        <label htmlFor='password' className='form-label'>
                        Sifra
                        </label>
                        <input 
                            id='password' 
                            type='password' 
                            name='password' 
                            className='form-input' 
                            placeholder='Unesite vasu sifru'
                            value={values.password}
                            onChange={handleChange}
                        />
                        {errors.password && <p> {errors.password} </p>}
                    </div>
                    <button className='form-input-btn' type='submit' onClick={ulogujteSe}> Uloguj se </button>
                    {registrovan===false?(<p className="porukaLogin">Niste se uspešno registrovali.</p>):(<div></div>)}
                    {registrovan&&(<Redirect to="/pocetna"/>)}
                    <span className='form-input-login'>
                    Nemate nalog? Vratite se <button onClick={()=>{clickButton(!button);}} className='login-btn'> nazad</button> 
                    </span>
                </form>
            </div> 
        );
    }
};


export default FormSignup
