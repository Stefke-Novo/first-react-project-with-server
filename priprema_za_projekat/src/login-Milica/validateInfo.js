export default function validateInfo(values){

    let errors={};

    if(!values.ime.trim()){
        errors.ime="Potrebno je uneti ime";
    }
    if(!values.prezime.trim()){
        errors.prezime="Potrebno je uneti prezime";
    }
    if(!values.username.trim()){
        errors.username ="Potrebno je uneti korisnicko ime";
    }
    if(!values.email){
        errors.email="Potrebno je uneti email";
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9._]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = "Uneta email adresa nije validna.";
    }
    if(!values.password){
        errors.password ="Potrebno je uneti sifru";
    }else if(values.password.length<6){
        errors.password='Sifra mora da ima barem 6 karaktera';
    }
    if(!values.password2){
        errors.password2 ="Potrebno je ponovo uneti sifru";
    }else if(values.password2 !== values.password){
        errors.password='Unete sifre su razlicite';
    }

    return errors;
}