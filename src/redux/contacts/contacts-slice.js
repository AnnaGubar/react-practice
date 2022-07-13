import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact: (state, { payload }) => {
      state.contacts.push(payload);
    },
    removeContact: (state, { payload }) => {
      state.contacts = [...state.contacts].filter(({ id }) => id !== payload);
    },
  },
});

export const { addContact, removeContact } = contactSlice.actions;
export default contactSlice.reducer;
