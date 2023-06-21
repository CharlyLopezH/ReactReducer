import ToDoItem from "./ToDoItem";

export const ToDoList=({toDoList=[]})=> {

const onHandlerClick =()=> {    
    console.log(toDoList);
}

    return (
        <ul className="list-group">
            <h1>Mapear Items</h1>
        {
            toDoList.map(item => 
            <ToDoItem key={item.id} item={item}/>
             )
        }
        {/* {
                        
        
        ))  
        } */}

        </ul>
    )
}
export default ToDoList;