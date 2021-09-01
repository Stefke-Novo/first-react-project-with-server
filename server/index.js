const express=require('express');
const cors = require('cors');
const app=express();
const port=3100;
let lista=[];
let lista1=[];
let listaKarata=[];
let karta=null;
let korisnik=null;
let korisnik1=null;
let konacnaLista=null;
let iskaz1=false;
app.listen(port,(req,res)=>{console.log("aplikacija radi na portu "+port)});
app.use(cors());
app.use(express.json());
//unos u konacnu listu
app.post("/konacnalista",(req,res)=>{const promise = new Promise((resolve,reject)=>{
    if(req.body!==null){
        console.log(req.body);
        resolve(req.body);
    } else reject(req.body);
}).then(lista=>{konacnaLista=lista;listaKarata=[]})
.catch(poruka=>{console.log("Greska u formiranju konacne liste.")})})
//promena liste karata
app.post("/promenikarte",(req,res)=>{const promise =new Promise((resolve,reject)=>{
    if(req.body!==null){
        console.log(req.body);
        resolve(req.body);
    }else reject(req.body);
}).then(lista=>{listaKarata=lista;console.log("lista karata: ");console.log(listaKarata);return listaKarata})
.catch("Nesto nije uredu .")});

//vraćanje liste karata
app.get("/vratikarte",(req,res)=>{res.send(listaKarata)});

//formiranje liste karata
app.post("/karte",(req,res)=>{const promise=new Promise((resolve,reject)=>{
    if(req.body!==null){
        karta=req.body;
        console.log("Poruka je stigla");
        console.log(req.body);
        resolve(karta);
    }else {
        reject(req.body);
    }
})
.then(karta=>{listaKarata=[...listaKarata,karta];console.log("lista karata:");return listaKarata;})
.then(listaKarata=>{console.log(listaKarata);})
.catch(poruka=>{console.log("Nešto nije uredu .")})});
//uzimanje liste
app.get("/create14",(req,res)=>{res.send(lista);console.log("Lista je poslata.")});

//ubacivanje novog člana
app.post("/create11",(req,res)=>{
    promise = new Promise(
        (resolve,reject)=>{
            if((korisnik=req.body)!=null){
               console.log("Poruka je primljena ");
               console.log("Korisnik: "+korisnik);
               resolve(korisnik);
            }else {
                console.log("Poruka nije primljena");
                reject("Greška , poruka nije stigla.");
            }
        })

        .then(korisnik=>{
            lista=[...lista,korisnik];
            console.log(lista);
        })
        .catch(greska=>{
            console.log(greska);
        });console.log(lista);
    });

//login

app.post("/login",(req,res)=>{
    const promise=new Promise((resolve,reject)=>{
        if((korisnik1=req.body)!=null){
            resolve(korisnik1);
        }else{
            reject("Poruka nije stigla");
        }
    }).then(korisnik1=>{
        console.log(korisnik1);
        lista.forEach(korisnik => {
            if(korisnik.username==korisnik1.username&&korisnik.password==korisnik1.password)
            {
                console.log("Usli smo u funkciju");
                iskaz1=true;
                return;
            }
        });
         res.send(iskaz1);
         iskaz1=false;
    }).catch(poruka=>{
        console.log(poruka);
    })
});
//ucitavanje koirisnika
app.get("/get",(req,res)=>{res.send(korisnik);console.log("pokrenut je zahtev.")});
//odziv aplikacije
app.get("/",(req,res)=>{res.send(`Aplikacija radi na portu ${port}`)});