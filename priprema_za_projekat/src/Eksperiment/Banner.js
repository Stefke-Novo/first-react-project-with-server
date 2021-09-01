import React ,{useState} from 'react';
import './Banner.css';
import {Button} from '@material-ui/core';
import Search from './Search';
function Banner(){
    const [poruka , promenaPoruke]=useState(false);
    return(
        <div className="Banner">
            <div className="BannerSearch">
                {poruka && <Search />}
                <Button 
                onClick={()=>{promenaPoruke(!poruka)}}
                variant="outlined">
                    Pretraži datum
                </Button>
            </div>
            <div className="BannerInfo">
                <h1>Naslov</h1>
                <h5>
                    Nesto je napisano .
                    Danas je bas lep dan . 
                    Nesto sam mnogo smoren .
                </h5>
                <Button variant="outline">Klikni</Button>
            </div>
        </div>
    )
}
export default Banner;