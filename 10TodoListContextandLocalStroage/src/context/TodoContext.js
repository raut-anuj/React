import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "1st Todo",
            completed:false,
        },
    ],
    addTodo: (todo)=> {},
    updateTodo: (idx, todo)=> {},
    toogleTodo: (idx)=> {},
    deleteTodo: (idx)=> {}
});

export const useTodo = () => {
    return useContext(TodoContext)
} 

export const TodoProvider = TodoContext.Provider