// import { createSlice } from '@reduxjs/toolkit';
// const slice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: [],
//     filter: '',
//   },
//   reducers: {
//     addContact(state, action){
//         state.contacts = [...state.contacts, action.payload];
//     }, 
//     deleteContact(state, action){
//         state.contacts = state.contacts.filter(
//             contact => contact.id !== action.payload
//           );
//     },
//     findContact(state, action){
//         state.filter = action.payload
//     }
//   },
// });

// export const accountReducer = slice.reducer;
// export const {addContact, deleteContact, findContact} = slice.actions;