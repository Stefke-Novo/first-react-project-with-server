import React from 'react';
import Lista from './../Top lista/TopLista'
import Jump from 'react-reveal/Jump';
import Example from './animPocetna';
import Meni from './meni';
import './Pocetna.css';

function Pocetna(){
    return (
    <div>
        <Meni/>
        <div className="naslov11">
            <Example/>
       <Jump><h1 className="DobroDosli"><i>Dobro došli</i></h1> </Jump>
        </div>
        <Lista />
    </div> )
}

export default Pocetna;
