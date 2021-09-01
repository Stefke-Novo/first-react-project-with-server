import React,{useEffect,useState} from 'react';
import './Opis.css';
import Axios from 'axios';
import Zoom from 'react-reveal/Zoom'; 
function Opis(){
    const[korisnik,promeniKorisnika]=useState({});
    useEffect(()=>{
        Axios.get("http://localhost:3100/get")
        .then((response)=>{promeniKorisnika(response.data);console.log(response.data)});
    }, [])
    return(
            <div className="Account">
                <section className="StranaLeva">
                    
                    <p className="Font">Ime</p>
                    <Zoom>
                    <p>{korisnik.ime}</p>
                    </Zoom>
                    <p className="Font">Prezime</p>
                    <Zoom>
                    <p>{korisnik.prezime}</p>
                    </Zoom>
                </section>
                <section className="StranaDesna">
                    <p className="Font">Korisnicko ime</p>
                    <Zoom>
                    <p>{korisnik.username}</p>
                    </Zoom>
                    <p className="Font">e-mail</p>
                    <Zoom>
                    <p>{korisnik.email}</p>
                    </Zoom>
                </section>
            </div>
    )
}
export default Opis;