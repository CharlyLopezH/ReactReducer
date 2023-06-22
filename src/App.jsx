import { useEffect, useReducer } from "react"
import { toDoReducer } from "./08-useReducer/toDoReducer";
import {ToDoList} from "./Components/TodoList";
import {ToDoAddForm} from "./Components/ToDoAddForm";

export const App=()=>{

    

    const handleNewTodo=(toDo)=>{

        const action = {
            type: '[TODO] Add ToDo',
            payload: toDo
        }

        dispatch(action);
    }

    const initialState = [
        //{
        // id: new Date().getTime(),
        // descripcion: 'Cualquier descripción 1',
        // done:false,
        // }   
    ]    
    //Recuperar del local Storage la información del formulario, para que sea persistente y no se borre al actualizar el navegador
    const init =()=>{
        return JSON.parse(localStorage.getItem('toDos')) || [];
    }

    const [toDos, dispatch] = useReducer (toDoReducer, initialState, init);

    const handleDeleteToDo = (id)=>{
        console.log('Aquí borrando');
        dispatch({
        type:'[TODO] Remove ToDo',
        payload:id});
    }

    useEffect(()=>{
       localStorage.setItem('toDos',JSON.stringify(toDos)); 
    },
    [toDos]
    )
    

return (    
    <>
    <div className="container">
    <h2>Redux Sample Todo's (X), <code> Por terminar, (y) </code></h2>
    <hr></hr>

<div className="row">
<div className="col-7">
    <ToDoList toDoList={toDos}
              onDeleteToDo={handleDeleteToDo}  />
</div>
    <div className="col-5">        
        <h4>Agregar Actividad</h4>
        <hr/>
        <ToDoAddForm onNewToDo={handleNewTodo}/>
    </div>

</div>

    <button className="btn btn-button mt-2">

    </button>
    </div>
    </>
)
}
export default App;