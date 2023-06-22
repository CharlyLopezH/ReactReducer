import ToDoItem from "./ToDoItem";

export const ToDoList=({toDoList=[], onDeleteToDo})=> {

const onHandlerClick =()=> {    
    console.log(toDoList);
}

    return (
        <ul className="list-group">
            <h1>Items Form</h1>
        {
            toDoList.map(item => 
            <ToDoItem key={item.id} item={item} onDeleteToDo={onDeleteToDo}/>
             )
        }
        {/* {
                        
        
        ))  
        } */}

        </ul>
    )
}
export default ToDoList;