import {hookSimpleForm} from "./hooks/hookSimpleForm";

const App=()=>{

    const initialForm={
        usrNombre:'',
        email:'',
        password:''
    };
    
    //Llamado desestructurado de funciones al archivo externo
    const {formState, onHandlerClick, onHandlerInput,usrNombre,email,password}=hookSimpleForm(initialForm);

    //Esto lo podemos obviar colocando ...formState en el retorno
    //const{usrNombre,email,password}=formState;

    return(
        <>
        <div className="container">
        <h2>Simple form</h2>
        <code>Ejemplo de formulario simple con un useForm personalizado. Toda la parte lógica se irá a una función para tal fin...</code> 
        <hr/>  

        <div className="col-md-6 mt-2">
        <input className="form-control"
        type="text"
        name="usrNombre"        
        onChange={onHandlerInput}        
        value={usrNombre}
        >
        </input>
        

        <input className="form-control mt-2"
        type="email"
        name="email"        
        onChange={onHandlerInput}
        value={email}
        >
        </input>

        <input className="form-control mt-2"
        type="password"
        name="password"        
        onChange={onHandlerInput}
        value={password}
        >
        </input>

        </div>
        <button
        className="btn btn-primary mt-2"
        onClick={onHandlerClick}
        >Click</button>
        </div>
        </>
    )
}
export default App;