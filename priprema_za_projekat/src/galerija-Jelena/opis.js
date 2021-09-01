import { useState } from 'react';
import Card from './Card';
import data from './data';
import lokacijaa from './slike/lok.png'
import './opis.css';
import UnesiListu1 from './ListaDesavanja1';
import Axios from 'axios';
function Dogadjaj({match}){
  console.log(match);
  const listaDesavanja=UnesiListu1();
  const desavanje=listaDesavanja
  .filter(desavanje=>desavanje.kategorija===match.params.id&&desavanje.link===match.params.idDesavanja);
  function unesiKartu(){
    const objekat=desavanje[0];
    Axios.post("http://localhost:3100/karte",objekat);
    console.log("Poruka je poslata.");
  }
  
  const[property,ChangeProperty]=useState(data.properties[0]);
  const nextProperty=()=>{
    const newIndex=property.index+1;
    ChangeProperty(data.properties[newIndex]);
  }
  const prevProperty=()=>{
    const newIndex =property.index-1;
    ChangeProperty(data.properties[newIndex]);
  }
      return(
      <div>
        <h1 className="Text1">{desavanje[0].naslov}</h1>
        <h3 className="Text2">Opis dogadjaja</h3>
        
        <div id = "div">
          <p className="pasus" >{desavanje[0].opisVeliki}</p>
        </div>
 

      <div className="page">
              <div>
                  <h3 className="Text2">Galerija slika:</h3>
                <Card property={property} />
                <div id='poddivDugmici'>
                  
                      <button className="dugme"
                        onClick={() => prevProperty()} 
                        disabled={property.index === 0}
                      >
                        Prev
                      </button>
                      <button 
                            className="dugme"
                        onClick={() => nextProperty()} 
                        disabled={property.index === data.properties.length-1}
                      >
                        Next
                      </button>   
                  </div>
              </div>
              <div>
                  <p className="pasus">
                    <img src = {lokacijaa} id = "sl"/>
                    <br/>
                    {desavanje[0].lokacija}
                  <p id="cena" className="pasus" onClick={unesiKartu}>CENA KARTE: {desavanje[0].cena} din</p>
                  </p>
              </div>
      </div>

    </div>

 )
}

    export default Dogadjaj;