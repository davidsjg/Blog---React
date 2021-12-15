import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";

import store from "./store";

//log the initial state
// console.log("Initial state: ", store.getState());

//every time state changes, log it
// const unsubscribe = store.subscribe(() => {
//   console.log("State after dispatch: ", store.getState());
// });

//dispatch actions
store.dispatch({ type: "todos/todoAdded", payload: "Learn about actions" });
// store.dispatch({ type: "todos/todoAdded", payload: "Learn about reducers" });
// store.dispatch({ type: "todos/todoAdded", payload: "Learn about stores" });

// store.dispatch({ type: "todos/todoToggled", payload: 0 });
// store.dispatch({ type: "todos/todoToggled", payload: 1 });

// store.dispatch({ type: "filters/statusFilterChanged", payload: "completed" });

// store.dispatch({
//   type: "filters/colorFilterChanged",
//   payload: { color: "Red", changeType: "added" },
// });

// unsubscribe();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
