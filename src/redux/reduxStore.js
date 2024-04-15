import { configureStore } from '@reduxjs/toolkit';
import tasks from './slices/tasks';
import toastNotify from './slices/toastNotify';

const store = configureStore({
  reducer: {
    todo: tasks,
    toast: toastNotify
  },
});

export default store;
