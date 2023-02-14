import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: { value: '' },
  reducers: {
    changeFilter(state, { payload }) {
      state.value = payload;
    },
  },
});
export const { changeFilter } = filterSlice.actions;
