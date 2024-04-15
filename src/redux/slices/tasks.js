import { createSlice } from '@reduxjs/toolkit';

const tasks = createSlice({
  name: 'todo',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setMarkAsDone: (state, action) => {
      //first get the todo by index number , which one user want to update
      //set all data same as previous and toggle the done property , if true then false and vice-versa
      state.todos[action.payload] = {
        ...state.todos[action.payload],
        done: !state.todos[action.payload].done,
      };
    },
    deleteTodo: (state, action) => {
      //here also get the index (from the ui by dispatching an action) and return all the element except the selected element that is to be deleted
      state.todos = state.todos.filter((task, i) => {
        return i != action.payload;
      });
    },


    setTodosFromLocalStorage: (state, action) => {
      //this function is used to set the todos which are retrives from the local-storage
      state.todos = action.payload;
    },
  },
});


//exporting the actions by which we can change the state of variable in redux
export const { addTodo, setMarkAsDone, deleteTodo, setTodosFromLocalStorage } = tasks.actions;
export default tasks.reducer;
