import React from 'react';
import {Link} from 'react-router-dom';
import './meni.css';
function Naslov(){
    return (
    <div className="meniOkvir">
        <nav className="meni">

        <div className="meni1">
            
            <div className="pocetna">
            <Link to='/pocetna'>
                <h1>Početna</h1>
            </Link>
            </div>
                <div className="meni1a">
                    <Link to='/Desavanja'>
                     <h1>Stavke</h1>
                     </Link>
                     <Link to="onama">
                     <h1>O nama</h1>
                     </Link>
                     <Link to='/nalog'>
                     <h1>Nalog</h1>
                     </Link>
                </div>
        </div>
        </nav>
    </div> )
}

export default Naslov;