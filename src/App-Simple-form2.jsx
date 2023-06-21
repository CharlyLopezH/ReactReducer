import useForm from "./hooks/useForm";

const App = ()=> {

    const initForm=({
        inputNombre:'',
        inputApellidos:'',
        inputPassword:''
    })
    
    const {onHandlerChange,onHandlerClick,inputNombre, inputApellidos, inputPassword}=useForm(initForm);

    //Esto es necesario si no recibimos desde el hook la copia del formState. Ej. return {...formState,}
    //const {inputNombre} = formState;

    return(
        <>
        <div className="container">
        <h1>Simple Form</h1>
        <p>Formulario simple DRY, con hook personalizado</p>
        <hr></hr>
        
        <input 
        className="form-control mt-2 col-md-6"
        placeholder="Nombre"
        name="inputNombre"
        value={inputNombre}  
        onChange={onHandlerChange}      
        >
        </input>

        <input 
        className="form-control mt-2 col-md-6"
        placeholder="Apellidos"
        name="inputApellidos"
        value={inputApellidos}  
        onChange={onHandlerChange}      
        >
        </input>

        <input 
        className="form-control mt-2 col-md-6"
        type="Password"
        placeholder="Contraseña"
        name="inputPassword"
        value={inputPassword}  
        onChange={onHandlerChange}      
        >
        </input>



        <button className="btn btn-primary mt-2" 
        onClick={onHandlerClick}
        >Reset
        </button>

        </div>
        </>
    )
}
export default App;