import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { kanyeReducer } from "./reducers/reducer";
import thunk from "redux-thunk";

import App from "./App";

import "./index.css";

const store = createStore(kanyeReducer, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement
);
