import { setupListeners } from '@reduxjs/toolkit/dist/query';

import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
 } from 'redux-persist';

 import { configureStore } from '@reduxjs/toolkit';

import { phoneBookApi } from 'redux/servicesApi/PhoneBookApi';

import { filterSlice } from 'redux/features/contacts/filterSlice';

import  { contactSlice }  from 'redux/features/contacts/contactSlice'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};


export const store = configureStore({
  reducer: {
    [phoneBookApi.reducerPath]: phoneBookApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [contactSlice.name]: persistReducer(authPersistConfig, contactSlice.reducer),
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        },
  })
  .concat([
      phoneBookApi.middleware,
    ]),

});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

