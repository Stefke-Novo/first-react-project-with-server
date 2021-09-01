import React from 'react';
import Dogadjaj from './opis';
import Meni from './../Glavne stranice/meni';
import ParticlesBg from "particles-bg";

function Glavna({match}) {
    return (
          <div>
            <Meni/>
            <div>
            <Dogadjaj match={match} />
            
            </div>

            <ParticlesBg type="thick" bg={true} id = "imeKlase"/>
          </div>
    );
}

export default Glavna;