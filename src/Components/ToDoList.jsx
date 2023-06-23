import ToDoItem from "./ToDoItem";

export const ToDoList=({toDoList=[], onDeleteToDo, onToggleToDo})=> {

const onHandlerClick =()=> {    
    console.log(toDoList);
}

    return (
        <ul className="list-group">
            <h1>Items Form</h1>
        {
            toDoList.map(item => 
            <ToDoItem key={item.id} 
            item={item} 
            onDeleteToDo={onDeleteToDo}
            onToggleToDo={onToggleToDo}/>
             )
        }
        {/* {
                        
        
        ))  
        } */}

        </ul>
    )
}
export default ToDoList;