import { useReducer } from "react"
import { toDoReducer } from "./08-useReducer/toDoReducer";
import ToDoList from "./Components/TodoList";
import ToDoAddForm from "./Components/ToDoAddForm";

export const App=()=>{

    const handleNewTodo=(toDo)=>{
        console.log(toDos);
    }

    const initialState = [
        {
        id: new Date().getTime(),
        descripcion: 'Cualquier descripción -- 1',
        done:false,
        },
        {
            id: new Date().getTime()*3,
            descripcion: 'Cualquier otra descripción ++',
            done:false,    
        },
        {
            id: new Date().getTime()*4,
            descripcion: 'Cualquier otra descripción +++',
            done:false,    
        }        

    ]

    const [toDos, dispatch] = useReducer (toDoReducer, initialState);

return (    
    <>
    <div className="container">
    <h2>Redux Sample Todo's (X), <code> Por terminar, (y) </code></h2>
    <hr></hr>

<div className="row">
<div className="col-7">
    <ToDoList toDoList={toDos}/>
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