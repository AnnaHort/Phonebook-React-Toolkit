import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactSlice";
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Об'єднуємо всі редюсери які ми хочемо зберегти
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

// збереження стейту у локальному сховищі
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);















 