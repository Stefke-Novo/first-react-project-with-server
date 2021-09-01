import React from 'react';
import Fade from 'react-reveal/Fade';
import  {motion} from 'framer-motion';
import {Link} from 'react-router-dom';
import './Desavanja.css';
import Meni from './meni';
function Desavanja1() {
    const desavanja=[{
        id: "Pozoriste",
        linkSajt:"pozorista",
        naslov:"Pozorišta" ,
        linkSlika:"/Slike/andrey-grinkevich-358754-unsplash.jpg",
    },
    {
        id: "Sport",
        linkSajt:"sportovi",
        naslov:"Sportovi" ,
        linkSlika:"/Slike/annie-spratt-696827-unsplash.jpg"
    },
    {
        id: "Koncerti",
        linkSajt:"koncerti",
        naslov:"Koncerti" ,
        linkSlika:"/Slike/benjamin-davies-260884-unsplash.jpg"
    },
    {
        id: "Bioskop",
        linkSajt:"bioskopi",
        naslov:"Bioskopi" ,
        linkSlika:"/Slike/cade-roberts-1053715-unsplash.jpg"
    },
    {
        id: "Festivali",
        linkSajt:"festivali",
        naslov:"Festivali" ,
        linkSlika:"/Slike/chad-peltola-972518-unsplash.jpg"
    },
    {
        id: "Izlozbe",
        linkSajt:"izlozbe",
        naslov:"Izlozbe" ,
        linkSlika:"/Slike/iqx-azmi-263873-unsplash.jpg"
    }];
      return (
       <div>  
           <Meni /> 
            <div className="Desavanja">
                <h1>Dešavanja</h1>
                <div className="Naslovi">
                    <Fade id="Animacija">
                        {desavanja.map(desavanje=>(
                        <div id={desavanje.id} key={desavanje.id} className="SlikaITekst">
                            <div className="Tekst">
                                <Link to={`/desavanja/${desavanje.linkSajt}`}>
                                    <motion.h1 whileHover={{scale:1.5}}>{desavanje.naslov}</motion.h1>
                                </Link>
                            </div>
                            <img src={desavanje.linkSlika} className="Slika" alt="Slika za kategoriju"/>
                        </div>))}
                    </Fade>
                </div>
            </div>
        </div>
      );
  }
  export default Desavanja1;