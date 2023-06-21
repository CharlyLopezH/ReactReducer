import {useForm} from '../hooks/useForm';
export const ToDoAddForm=({onNewToDo})=>{

    const {descripcion, onHandlerChange, onHandlerClick, onResetForm } = useForm({
          descripcion:''
    })

    const onFormSubmit=(event)=>{
        event.preventDefault();
        if (descripcion.length <= 1) return;
        const newToDo = {
            id: new Date().getTime(),
            descripcion:descripcion,
            done:false,
        }
        onNewToDo(newToDo);
        onResetForm();
    }

    return(
        <>
        <form onSubmit={onFormSubmit}>
            <input 
            type="text"
            className="form-control"
            placeholder="¿Qué hay que hacer?"
            name='descripcion'
            value={descripcion}
            onChange={onHandlerChange}
            />
            <button type="submit"
             className="btn btn-outline-success mt-2">
                Agregar
            </button>            
        </form>

        
        </>
    )
}
export default ToDoAddForm;