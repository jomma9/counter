import React from "react";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { Provider } from "react-redux";
import logger from "redux-logger";
import counterReducer from "./reducer/counterReducer";
import Counter from "./components/Counter";

import "./App.css";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, counterReducer);

let store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Counter />
      </PersistGate>
    </Provider>
  );
}

export default App;
