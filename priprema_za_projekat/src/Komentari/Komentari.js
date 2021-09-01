import React, { useState } from 'react';
import Komentar from './Komentar';
import Fade from 'react-reveal/Fade';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TypeWriterEffect from 'react-typewriter-effect';
import  './komentari.css';



function Komentari(){
    const [komentari , upisikomentar]=useState([]);
    const [tekst , promeniTekst]=useState("");
    const [indeks, promeniIndeks]=useState(0);
    
    const unetiTekst=(unesenTekst)=>{
        unesenTekst.preventDefault();
        promeniIndeks(indeks+1);
        upisikomentar([...komentari,tekst]);
        console.log(komentari);
        promeniTekst("");
    }
    return (
       <div className="OkvirKomentari1" >
           
           <div id='crvena'>
            
           <TypeWriterEffect
            textStyle={{ 
                fontFamily: 'Red Hat Display',
            }}
            startDelay={100}
            cursorColor="black"
            text="Zelite li da ostavite komentar?"
            typeSpeed={100}  />
            
            </div> 
            
            <form className="formaKomentar">
                <TextField value={tekst} onChange={unesenTekst=>{promeniTekst(unesenTekst.target.value);}} />
                <Button type="submit" variant="contained" color="primary" disabled={!tekst} onClick={unetiTekst}>
                    Unesi komentar</Button>
            </form>
            <h3 className = 'komLevo'>Komentari:</h3>
            <div className="OkvirZaKomentare">
            {komentari.map(komentar=>(
                <Fade>
                <Komentar utekst={komentar} />
                </Fade>
            ))}
            </div>
        </div>
    )
}
export default Komentari;