import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction('contacts/addContact');
export const deleteContact = createAction('contacts/deleteContacts');
export const findContact = createAction('contacts/findContact');


