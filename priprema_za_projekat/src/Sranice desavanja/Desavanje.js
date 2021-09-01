import React from 'react';
import Meni from '../Eksperiment/Home';
import Heder from '../Eksperiment/heder';
import MeniPocetni from '../Glavne stranice/meni';
import './Desavanje.css';
function Bioskopi({match}){
        switch (match.url) {
            case "/desavanja/bioskopi":
                return (
                    <div>
                        <MeniPocetni />
                        <Heder kategorija="Bioskopi" />
                        <Meni link={match.url} kategorija="bioskopi"/>
                    </div>
                )

                case "/desavanja/festivali":
                return (
                    <div>
                        <MeniPocetni />
                        <Heder kategorija="Festivali" />
                        <Meni link={match.url} kategorija="festivali"/>
                    </div>
                )

                case "/desavanja/izlozbe":
                return (
                    <div>
                        <MeniPocetni />
                        <Heder kategorija="Izložbe"/>
                        <Meni link={match.url} kategorija="izložbe"/>
                    </div>
                )

                case "/desavanja/koncerti":
                return (
                    <div>
                        <MeniPocetni />
                        <Heder kategorija="Koncerti"/>
                        <Meni link={match.url} kategorija="koncerti"/>
                    </div>
                )

                case "/desavanja/pozorista":
                return (
                    <div>
                        <MeniPocetni />
                        <Heder kategorija="Pozorišta"/>
                        <Meni link={match.url} kategorija="pozorišta"/>
                    </div>
                )

                case "/desavanja/sportovi":
                return (
                    <div>
                        <MeniPocetni />
                        <Heder kategorija="Sportovi"/>
                        <Meni link={match.url} kategorija="sportovi"/>
                    </div>
                )
        
            default:
                break;
        }
}

export default Bioskopi;