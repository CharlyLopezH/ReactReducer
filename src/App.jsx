import { useEffect, useReducer } from "react"
import { toDoReducer } from "./08-useReducer/toDoReducer";
import {ToDoList} from "./Components/TodoList";
import {ToDoAddForm} from "./Components/ToDoAddForm";
import {useToDo} from './hooks/useToDo';


export const App=()=>{

    const {toDos, handleDeleteToDo, handleToggleToDo,handleNewTodo, toDosCount, pendCount}=useToDo();

return (    
    <>
    <div className="container">
    <h2>Redux Sample To Do's: {toDosCount}, <code> Por terminar, {pendCount} </code></h2>
    <hr></hr>

<div className="row">
<div className="col-7">
    <ToDoList toDoList={toDos}
              onDeleteToDo={handleDeleteToDo}
              onToggleToDo={handleToggleToDo}  />
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