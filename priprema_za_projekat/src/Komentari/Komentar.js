import React,{useState,useEffect} from 'react';
import Datum from './../Datum/Datum';
import Vreme from './../Datum/Vreme';
import './komentar.css';
import Axios from 'axios';
function Komentar ({utekst}){
    const[korisnik,promeniKorisnika]=useState({});
    useEffect(()=>{Axios.get("http://localhost:3100/get")
    .then((response)=>{promeniKorisnika(response.data);console.log(response.data)
    });},[]);
    return (
        <div className="komentarOkvir">
            <div className="OkvirElemenata">
                <div className="OkvirImeiPrezime">
                    <p>{korisnik.ime}</p>
                    <p>{korisnik.prezime}</p>
                </div>
            <div className="okvirDatumIVreme">
                    <Datum />
                    <Vreme />
            </div>
            </div>
            <p className="komentarPasus">
                {utekst}
            </p>
        </div>
    )
}
export default Komentar;