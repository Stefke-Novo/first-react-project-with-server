import React from 'react';
import Bounce from 'react-reveal/Bounce';
import './topMesto.css';

class BounceExample extends React.Component {
  render() {
    return (
      <div className='topmesto'>
              <p className="naslovPocetna">Top 5 dogadjaja:</p>
        <Bounce left>
        <div className="levo" id='idd'>
                  <div className="Tekst2">
                        <h3 className='topp'>#1 Željko Vasić - Klavir, Vi i ja</h3>
                        <h3>Datum: 26.2.2021.</h3>
                        <h3>Vreme: 18h</h3>
                        <h3>Ulica: Zdravka Celara 12</h3>
                        <h3>Mesto: Beograd</h3>
                  </div>
            </div> </Bounce>
            <Bounce right>
            <div className="levo" id= 'zvezdaa'>
                    <div className="Tekst2">
                      <h3 className='topp' id='kljuc'>#2 KK Crvena Zvezda</h3>
                      <h3>Datum: 26.2.2021.</h3>
                      <h3>Vreme: 15h</h3>
                      <h3>Ulica: Zdravka Celara 12</h3>
                      <h3>Mesto: Hala Aleksandar Nikolic, Beograd</h3>
                    </div>
            </div></Bounce>
            <Bounce left>
        <div className="levo" id='treciDiv'>
                 <div className="Tekst2">
                 <h3 className='topp'>#3 Željko Vasić - Klavir, Vi i ja</h3>
                 <h3>Datum: 26.2.2021.</h3>
                 <h3>Vreme: 18h</h3>
                 <h3>Ulica: Zdravka Celara 12</h3>
                 <h3>Mesto: Beograd</h3>
                 </div>
            </div> </Bounce>
            <Bounce right>
            <div className="levo">
              <div className="Tekst2">
              <h3 className='topp'>#4 Željko Vasić - Klavir, Vi i ja</h3>
              <h3>Datum: 26.2.2021.</h3>
              <h3>Vreme: 18h</h3>
              <h3>Ulica: Zdravka Celara 12</h3>
              <h3>Mesto: Beograd</h3>
              </div>
            </div></Bounce>
            <Bounce left>
            <div className="levo">
              <div className="Tekst2">
               <h3 className='topp'>#5 Željko Vasić - Klavir, Vi i ja</h3>
               <h3>Datum: 26.2.2021.</h3>
               <h3>Vreme: 18h</h3>
               <h3>Ulica: Zdravka Celara 12</h3>
               <h3>Mesto: Beograd</h3>
               </div>
            </div>
            </Bounce>
        
        
      </div>
    );
  }
}

export default BounceExample;