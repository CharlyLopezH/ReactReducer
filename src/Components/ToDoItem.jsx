import { SvgButton } from "./SvgButton";
export const ToDoItem = ({item})=>{
    return(
        <>
             <li key={item.id} className="list-group-item d-flex justify-content-between">    
              <span className="align-self-center">{item.descripcion}</span>
              <button className="btn btn-danger"
               onClick={(e)=>onHandlerClick(e)}> 
              <SvgButton/>            
              </button>                
             </li>
        </>
    )
}
export default ToDoItem;