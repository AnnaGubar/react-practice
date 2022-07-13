import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  contacts: [],
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    removeContact: (state, { payload }) => {
      state.contacts = [...state.contacts].filter(({ id }) => id !== payload);
    },
  },
});

export default contactSlice.reducer;