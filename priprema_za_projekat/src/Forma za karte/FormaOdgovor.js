import React from 'react';


function FormaOdgovor({ImeFilma,DatumFilma,DatumKarata,BrojKarata}){

    return(
        <div>
            <h1>{ImeFilma}</h1>
            <h1>{DatumFilma}</h1>
            <h1>{DatumKarata}</h1>
            <h1>{BrojKarata}</h1>
        </div>
    )
}
export default FormaOdgovor;