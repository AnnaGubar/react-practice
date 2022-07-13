import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import contactsReducer from '../redux/contacts/contactsReducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

export const store = configureStore({
  reducer: { contacts: persistReducer(contactsPersistConfig, contactsReducer) },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  logger,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// const persister = persistStore(store);

// let data = { store, persister };

// export default data;
