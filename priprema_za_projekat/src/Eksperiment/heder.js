import React,{useEffect,useState} from 'react';
import './heder.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import {Avatar} from '@material-ui/core';
import Axios from 'axios';

function Heder({kategorija}){
    const[kliktanje,promeniKliktanje]=useState(false);
    const[kliktanje1,promeniKliktanje1]=useState(false);
    const[korisnik,promeniKorisnika]=useState({});
    useEffect(()=>{
        Axios.get("http://localhost:3100/get").then((response)=>{promeniKorisnika(response.data);
        console.log(response.data)});
    }, [])

    return(
        <div className="Heder">
            <div className="HederLevo">
                <h1>{kategorija}</h1>
            </div>
            <div className="HederCentar">
                <input type="text"/>
                <SearchIcon />
            </div>
            <div className="HederDesno">
                <ExpandMoreIcon className="Avatar" onClick={()=>{promeniKliktanje1(!kliktanje1)}}/>
                {kliktanje1&&(
                <div className="Opis1">
                    <h3>Aktuelna dešavanja</h3>
                    <h3>Omiljena dešavanja</h3>
                </div>)}
                <Avatar className="Avatar" onClick={desavanje=>{promeniKliktanje(!kliktanje)}}/>
                {kliktanje&&(
                <div className="Opis">
                    <h3>Ime: {korisnik.ime}</h3>
                    <h3>Prezime :{korisnik.prezime}</h3>
                    <h3>Korisnicko ime : {korisnik.username}</h3>
                    <h3>Email :{korisnik.email}</h3>
                </div>)}
            </div>
        </div>
    )
}
export default Heder;