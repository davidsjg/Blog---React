import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import store from "./store";

//log the initial state
console.log("Initial state: ", store.getState());

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
