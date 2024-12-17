import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // You can change this to sessionStorage if needed
import super_admin_reducers from './reducers/super_admin_reducer.jsx';

// Define the persist configuration
const persistConfig = {
  key: 'root',
  storage // default is localStorage, but you can use sessionStorage or other storage
  // whitelist: ['super_admin'], // list which reducers to persist (optional)
};

// Apply persistReducer to the super_admin reducer
const persistedReducer = persistReducer(persistConfig, super_admin_reducers);

export const store = configureStore({
  reducer: {
    super_admin: persistedReducer, // Use the persisted reducer here
  },
});

// Create the persistor
export const persistor = persistStore(store);
