import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export function configureStore() {
  const enhancer = composeWithDevTools(applyMiddleware(thunk))
  const store = createStore(
    persistedReducer,
    enhancer    
  );
  let persistor = persistStore(store)
  return {store, persistor};
}