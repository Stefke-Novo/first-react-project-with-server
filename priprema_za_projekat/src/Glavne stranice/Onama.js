import React,{useState} from 'react';
import './Onama.css';
import {motion,AnimateSharedLayout,AnimatePresence} from 'framer-motion';
import Meni from './meni';
import GalerijaSlider from './../GalerijaSlider'
import {SliderData} from './../SliderData'
import Layout from './../Animation'
function ONama(){
    const [selectedId, setSelectedId] = useState(null);
    const [selObjekat , promeniObjekat]=useState(null);
    const lista=[
      {
        id:1,
        naslov1:"Mala prica o nama",
        tekst:"Nasa kompanija osnovana je davne 2005. godine u Beogradu. Prve karte za neki dogadjaj preko nase aplikacije prodate su dve godine kasnije - za koncert Toseta Proeskog u Beogradskoj areni. Od tada se preko nasa aplikacije mogu kupovati karte za sve vrste dogadjaja - koncerte, utakmice, pozorisne predstave, a od nedavno i izlobe, filmske projekcije i muzicke festivale. Aplikacija je za sada namenjena samo korisnicama u Srbiji, a u bliskoj buducnosti plniramo prosirenje na region a zatim i ostatak Evrope.",
      },
      {
        id:2,
        naslov1:"Nasi promoteri",
        tekst:"Broj korisnika nasa aplikacije je iz godine u godinu sve veci. Medju mnogobrojnim korisnicmima nalaze se i nasi poznati muzicari, sportisti ... Neki od njih su postali i nasi brend ambasadori kao npr teniser Filip Krajinovic, fudbaler Milan Borjan, pevacica Jelena Tomasevic i njen muz Ivan Bosiljcic i mnogi drugi. Svojim imenom su mnogo doprineli sirenju naseg brenda.",
      },
      {
        id:3,
        naslov1:"Nagrade",
        tekst:"Rad nase kompanije prepoznat je sirom teritorije nase zemlje kao uspesan i inovativn. Tokom 15 godina postajanje nase aplikacije, ona je dobila mnoge nagrade. U konkurenciji slicnih online servisa cak 4 puta je izabrana za Aplikaciju godine od strane korisnika. Medjutim, najznacajnija nagrade je bila 3 mesto na Medjunarodnom sajmu online usluga u Londonu 2019. godine. Time je stvorena osnova za prosirivanje na inostrano trziste.",
      }
    ];
    return (
      <div>
        <Meni />
        <div className="Onama">
          <div className="Naslov1">
                  <Layout naslov="O nama" />
          </div>
            <AnimateSharedLayout type="crossfade">
              <motion.div className="mestoZaKartice">
                  {lista.map(deo => (
                    <motion.div className="karticeOpcija" layoutId={deo.id} onClick={() => {setSelectedId(deo.id);
                      promeniObjekat({
                    id:deo.id,
                    naslov1:deo.naslov1,
                    tekst:deo.tekst,
                    });}}>
                      <motion.h2>{deo.naslov1}</motion.h2>
                    </motion.div>
                  ))}
              </motion.div>
    
              <AnimatePresence>
                {selectedId && selObjekat && (
                  <motion.div layoutId={selectedId}  id="pokrenutaKartica" onClick={()=>{setSelectedId(null);
                  promeniObjekat(null);}}>
                          <motion.h2 >{selObjekat.naslov1}</motion.h2>
                          <motion.p className="TekstKartica"> {selObjekat.tekst} </motion.p>
                    <motion.button layoutId={selObjekat.id} />
                  </motion.div>
                )}
              </AnimatePresence>
              <AnimatePresence>
                    <motion.div className="galerija">
                    <motion.div className="naslov">
                      <Layout naslov="Galerija"/>
                    </motion.div>
                    <GalerijaSlider slides={SliderData}/>
                </motion.div>
              </AnimatePresence>
            </AnimateSharedLayout>
        </div>
    </div>
    )
}

export default ONama;