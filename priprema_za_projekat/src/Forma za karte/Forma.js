import React, { useState } from 'react';
import './forma.css';
import FormaOdgovor from './FormaOdgovor';

function Forma(){
    const[DatumFilm,promenaDatumaFilma]=useState("");
    const[DatumKarte,promenaDatumaKarata]=useState("");
    const[ImeFilma,promenaImenaFilma]=useState("");
    const[BrojKarata,promenaBrojaKarata]=useState("");
    const[praznaForma,popuniFormu]=useState([]);
    const unosPodataka=(upisivanjeTeksta1)=>{
        upisivanjeTeksta1.preventDefault();
        popuniFormu([...praznaForma]);
    };
    return (
        <div>
            <h1>Ovo je forma za admina</h1>
            <form className="forma">
                <label>Unesite ime filma</label>
                <input  type="text" value={ImeFilma} onChange={upisivanjeTeksta1=>{promenaImenaFilma(upisivanjeTeksta1.target.value)}} />
                <label>Unesite datum održavanja filma u formatu DD-MM-YY</label>
                <input type="date"value={DatumFilm} onChange={upisivanjeTeksta2=>{promenaDatumaFilma(upisivanjeTeksta2.target.value)}}/>
                <label>Unesite poslednji datum predviđen za prodaju karata u formatu DD-MM-YY</label>
                <input type="date" value={DatumKarte} onChange={upisivanjeTeksta3=>{promenaDatumaKarata(upisivanjeTeksta3.target.value)}}/>
                <label>Rapoloživi broj karata :</label>
                <input value={BrojKarata} onChange={upisivanjeTeksta4=>{promenaBrojaKarata(upisivanjeTeksta4.target.value)}} />
                <button disabled={(!DatumKarte||!DatumFilm||!ImeFilma||!BrojKarata)} onClick={unosPodataka}>Ptvrdite unos</button>
            </form>
            {praznaForma.map((forma)=>(
                {forma}
            ))}
        </div>
    )
}
export default Forma;