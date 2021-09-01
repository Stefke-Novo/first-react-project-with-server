import React, { useState,useEffect } from 'react';
import Meni from './meni';
import Opis from './Kontakt/Opis';
import './Kontakt/Opis.css';
import Axios from 'axios';
import Komentari from './../Komentari/Komentari';
import Button from '@material-ui/core/Button';
function Kontakt(){
    const[listaKarata,promeniListukarata]=useState([{},{}]);
    const[kupljeneKarte,promeniKupljeneKarte]=useState(false);
    const[korisnik,promeniKorisnika]=useState({});
    useEffect(()=>{Axios.get("http://localhost:3100/vratikarte")
    .then((response)=>{promeniListukarata(response.data);console.log(response.data)
});},[]);
    useEffect(()=>{Axios.get("http://localhost:3100/get")
    .then((response)=>{promeniKorisnika(response.data);console.log(response.data)
    });},[]);
    const ukupniZbir1=listaKarata.reduce((zbir,karta)=>zbir+karta.cena,0);
    function brisanjeKarte(kartau){
       const index=listaKarata.indexOf(kartau);
       console.log(index);
       if(index>-1)
       promeniListukarata(listaKarata.filter(karta=>karta!==kartau));
       console.log(listaKarata);
       Axios.post("http://localhost:3100/promenikarte",listaKarata.filter(karta=>karta!==kartau));
    }
    function kupiteKarte(){
        Axios.post("http://localhost:3100/konacnalista",{korisnik,listaKarata});
        promeniListukarata([]);
        promeniKupljeneKarte(true);
    }
    return (
    <div >
        <Meni/>
        <h1 className="bioskopi">Nalog</h1>
        <Opis/>
        <div className="KupovinaOkvir">
        {listaKarata.length==0?(<p className="Kupovina">Nema karata na listi zakupovinu.</p>):
        (<p className="Kupovina">Kupljene karte :</p>)}
                {listaKarata.map(karta=>(
                <div className="OkvirKarta" key={karta.getIndex}>
                <div className="Karta">
                    <div>
                        <p>{karta.naslov}</p>
                        <p>{karta.kategorija}</p>
                    </div>
                    <div>
                    <p>{karta.cena}</p>
                    <p>{karta.lokacija}</p>
                    </div>
                    </div>
                    <div className="DugmeX" onClick={()=>{brisanjeKarte(karta)}}>X</div>
                </div>
                ))}
                {!(listaKarata.length==0)?
                (<Button variant="contained" color="primary" 
                onClick={()=>{kupiteKarte();console.log("pokrenuta je funkcija")}}>Kupite karte</Button>):
                (<div></div>)}
                {!(listaKarata.length==0)?
                (<p className="Kupovina">Ukupna cena karata: {ukupniZbir1} din</p>):(<div></div>)}
                {kupljeneKarte&&(<p className="Kupovina">Karte su uspešno kupljene , želimo Vam lep provod.</p>)}
        </div>
        <Komentari />
    </div> )
}

export default Kontakt;