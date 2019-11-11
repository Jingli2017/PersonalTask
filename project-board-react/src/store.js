import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

const initState = {};
const middleware = [thunk];

const ReactReduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default () => {
  let store;

  if (window.navigator.userAgent.includes("Chrome") && ReactReduxDevTools) {
    store = createStore(
      persistedReducer,
      initState,
      compose(
        applyMiddleware(...middleware),
        ReactReduxDevTools
      )
    );
  } else {
    store = createStore(
      persistedReducer,
      initState,
      compose(applyMiddleware(...middleware))
    );
  }

  let persistor = persistStore(store);
  return { store, persistor };
};
