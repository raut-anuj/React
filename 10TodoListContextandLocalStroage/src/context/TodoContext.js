import { useContext, createContext } from "react";
// useState → state manage
// useEffect → side effects
// TodoProvider → context data share
// TodoForm → todo add UI
// TodoItem → todo show

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo: "1st Todo",
            completed:false,
        },
    ],

    // Ye dummy function hai.
    // Iska kaam sirf ye batana hai ki context me addTodo naam ka function hoga.
    // Isko React ignore kar deta hai jab provider value mil jati hai.
    addTodo: (todo)=> {},
    updateTodo: (idx, todo)=> {},
    toogleTodo: (idx)=> {},
    deleteTodo: (idx)=> {}
});

export const useTodo = () => {
    return useContext(TodoContext)
} 

export const TodoProvider = TodoContext.Provider