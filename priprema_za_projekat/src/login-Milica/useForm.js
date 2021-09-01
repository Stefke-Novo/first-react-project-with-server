import {useState, useEffect} from 'react'

const useForm = (callBack, validate) => {
    const[values, setValues] = useState({
        ime: '',
        prezime: '',
        username: '',
        email: '',
        password: '',
        password2: '',
    })
    const [errors, setErrors] = useState({});

    const[isSubmitting, setIsSubmitting] = useState(false)
    
    const handleChange = e =>{
        console.log(e.target);
        const{name, value}=e.target;
        setValues({
            ...values,
            [name]: value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmitting(true);
    };

    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmitting){
            callBack();
        }
    }, [errors]);

    return {handleChange, values, handleSubmit, errors};
}

export default useForm;