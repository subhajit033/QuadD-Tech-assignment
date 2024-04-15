import { createSlice } from '@reduxjs/toolkit';

const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    toastType: {
      type: '',
      message: '',
    },
  },
  reducers: {
    setToast: (state, action) => {
      state.toastType = { ...action.payload };
    },
  },
});

export const { setToast } = toastSlice.actions;
export default toastSlice.reducer;
