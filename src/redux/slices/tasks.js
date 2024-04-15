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
      state.todos[action.payload] = {
        ...state.todos[action.payload],
        done: !state.todos[action.payload].done,
      };
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((task, i) => {
        return i != action.payload;
      });
    },
  },
});

export const { addTodo, setMarkAsDone, deleteTodo } = tasks.actions;
export default tasks.reducer;
