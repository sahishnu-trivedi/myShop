import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import cartReducer from '../features/CartProductSlice'

const persistConfig = {
    key: 'root',
    storage,
     whitelist: ['allCart'] // only persist the cart slice
}

const rootReducer = combineReducers({
  allCart: cartReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // Wrap the root reducer with persistReducer to enable persistence

export const store = configureStore({
    // reducer: {allCart: cartReducer,}
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production', // Enables Redux DevTools Extension in development mode
    middleware: (getDefaultMiddleware) => // Redux Toolkit helper that sets up some default middlewares, including: redux-thunk for async actions serializableCheck to ensure state and actions are serializable
        getDefaultMiddleware({ // Ensures that the state and actions are serializable, which is important for debugging and performance.
            serializableCheck: { // warns if: You try to store non-serializable values (like Dates, functions, DOM nodes, etc.) in the Redux store or dispatch them as actions. 
                ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'], // silences the warnings for non-serializable values (like functions, promises, etc.),
            },
        }),
});

export const persistor = persistStore(store); // Creates a persistor object that is used to persist the Redux store state across sessions.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;