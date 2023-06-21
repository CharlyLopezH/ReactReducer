import { useState } from "react";

export const useForm=(initialState)=> {
//console.log('Aquí voy dentro del useForm');

const [formState,setFormState]=useState(initialState); 

const onHandlerChange =({target})=>{
    setFormState({
        ...formState,[target.name]:target.value
    });
}

const onResetForm = () => {
    setFormState(initialState);
}

const onHandlerClick =()=>{
    console.log('click...');
    setFormState(initialState);
}

return {    
    ...formState,    
    onHandlerChange,
    onHandlerClick,
    onResetForm    
}
}
export default useForm;