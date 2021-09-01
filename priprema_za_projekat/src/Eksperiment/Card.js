import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';
function Card({link,src,naslov, opis,cena}){
    console.log(naslov);
    return(
        <div className="Card">
            <img src={src} alt="Slika događaja" />
            <div className="CardInfo">
                <Link to={link} >
                <h2>{naslov}</h2>
                <h4>{opis}</h4>
                <h3>{cena}</h3>
                </Link>
            </div>
        </div>
    )
}
export default Card;