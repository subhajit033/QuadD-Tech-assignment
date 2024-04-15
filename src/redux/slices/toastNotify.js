import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    toast: {
      type: '',
      message: '',
    },
  },
  reducers: {
    setToast: (state, action) => {
      state.toast = { ...action.payload };
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
