import { useEffect, useReducer } from "react";
import { toDoReducer } from "../08-useReducer/toDoReducer";

//El código que consume el App va a estar definido aquí. 
export const useToDo=()=>{


    const init =()=>{
        return JSON.parse(localStorage.getItem('toDos')) || [];
    }

    const [toDos, dispatch] = useReducer (toDoReducer, [], init);


    const handleDeleteToDo = (id)=>{
         console.log('Aquí borrando desde el Handle del (Botón) Delete'+ id);
         dispatch({
         type:'[TODO] Remove ToDo',
         payload:id});
     }

         const handleToggleToDo = (id)=>{
         console.log(`toggle ${id}`);
         dispatch({
             type:'[TODO] Toggle ToDo',
             payload:id
         })
     }

    const handleNewTodo=(toDo)=>{

        const action = {
            type: '[TODO] Add ToDo',
            payload: toDo
        }

        dispatch(action);
    }

     useEffect(()=>{
        localStorage.setItem('toDos',JSON.stringify(toDos)); 
     },
     [toDos]
     )


return {
    toDos,
    handleDeleteToDo,
    handleToggleToDo,
    handleNewTodo
}    

}
export default useToDo;