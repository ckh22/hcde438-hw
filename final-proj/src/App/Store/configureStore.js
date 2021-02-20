import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk";

export function configureStore() {
  const enhancer = composeWithDevTools(applyMiddleware(thunk))
  const store = createStore(
    rootReducer,
    enhancer    
  );
  return store;
}