import { configureStore } from '@reduxjs/toolkit';
import tasks from './slices/tasks';

const store = configureStore({
  reducer: {
    todo: tasks,
  },
});

export default store;
