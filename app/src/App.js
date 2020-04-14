import React from "react";
import "./index.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import thunk from "redux-thunk";

import Trivia from './Trivia'



import { rootReducer } from "./reducers";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Redux Async WebPT13</h1>
        <Trivia />
      </div>
    </Provider>
  );
}
