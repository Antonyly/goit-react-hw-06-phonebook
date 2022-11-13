import { createSlice } from '@reduxjs/toolkit';
import { initialState } from '../contacts/contacts-slice';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    setFilter: (store, { payload }) => (store = payload),
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;