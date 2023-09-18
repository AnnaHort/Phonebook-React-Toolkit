import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, findContact } from './actions';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsReducer = createReducer(initialState, builder =>
  builder
    .addCase(addContact, (state, action) => {
      state.contacts = [...state.contacts, action.payload]
    })
    .addCase(deleteContact, (state, action) => {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    })
    .addCase(findContact, (state, action) => {
        state.filter = action.payload
    })
);


