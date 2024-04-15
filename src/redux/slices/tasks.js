import { createSlice } from "@reduxjs/toolkit";

const tasks = createSlice({
    name: 'todo',
    initialState:{
        todos: []
    },
    reducers:{
        addTodo: (state, action)=>{
            state.todos.push(action.payload)

        }
    }
})

export const {addTodo} = tasks.actions;
export default tasks.reducer;

