import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import { contactsReducer } from './contacts';
import storage from 'redux-persist/lib/storage';

const contactsPersistConfig = {
  key: 'contacts',
  storage,
};

export const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});
