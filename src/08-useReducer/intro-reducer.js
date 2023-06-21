const initialState=[{
    id:1,
    toDo: 'Hacer Algo 1',
    done: false

}];

const toDoReducer=( state=initialState, action={})=>{    
    if (action.type === '[TODO] add toDo') {
        return[...state,action.payload];
    }
    return state;
}

let toDos= toDoReducer();

const newToDo={
    id:2,
    todo: 'Otra tarea nueva, 2',
    done:false
}

const addToDoAction = {
    type: '[TODO] add ToDo',
    payload:newToDo,
}

toDos = toDoReducer (toDos,addToDoAction);

console.log({state:toDos});