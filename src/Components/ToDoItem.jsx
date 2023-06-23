import { SvgButton } from "./SvgButton";
export const ToDoItem = ({item, onDeleteToDo, onToggleToDo})=>{
    return(
        <>
             <li key={item.id} className="list-group-item d-flex justify-content-between">    
              <span className="align-self-center"
                    onClick={()=> onToggleToDo(item.id)}
                                            
              >{item.descripcion}</span>
              <button className="btn btn-danger"
                      onClick={()=>onDeleteToDo(item.id)}> 
              <SvgButton/>            
              </button>                
             </li>
        </>
    )
}
export default ToDoItem;