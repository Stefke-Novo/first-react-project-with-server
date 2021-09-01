import React from 'react';
import './Home.css';
import Banner from './Banner';
import Card from './Card';
import UbaciListu from './ListaDesavanja';
function Meni({link,kategorija}){
    const listaDesavanja1=UbaciListu();
    const listaDesavanja=listaDesavanja1.filter(desavanje=>desavanje.kategorija==kategorija);
    console.log(kategorija);
    console.log(listaDesavanja);
    return(
        <div className="Meni">
            <Banner />
                {listaDesavanja.map(blok=>(
                    <div className="HomeSection">
                    <Card src={blok.desavanje1.slika}
                    link={link+`${blok.desavanje1.idDesavanja}`}
                    naslov={blok.desavanje1.naslov}
                    opis={blok.desavanje1.opis}
                    cena={blok.desavanje1.cena}/>
                    <Card src={blok.desavanje2.slika}
                    link={link+`${blok.desavanje2.idDesavanja}`}
                    naslov={blok.desavanje2.naslov}
                    opis={blok.desavanje2.opis}
                    cena={blok.desavanje2.cena}/>
                    <Card src={blok.desavanje3.slika}
                    link={link+`${blok.desavanje3.idDesavanja}`}
                    naslov={blok.desavanje3.naslov}
                    opis={blok.desavanje3.opis}
                    cena={blok.desavanje3.cena}/>
                </div>
                ))}
        </div>
    )
}

export default Meni;