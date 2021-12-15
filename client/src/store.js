import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducer";
import { print1, print2, print3 } from "./exampleAddons/middleware";

import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from "./exampleAddons/enhancers";

const middlewareEnhancer = applyMiddleware(print1, print2, print3);

// const composedEnhancer = compose(sayHiOnDispatch, includeMeaningOfLife);

const composedEnhancer = composeWithDevTools(
  sayHiOnDispatch,
  includeMeaningOfLife,
  applyMiddleware(print1, print2, print3)
);

let preloadedState = {
  todos: [{ id: 0, text: "Learn Redux", completed: false, color: "purple" }],
  filters: {
    status: "all",
    colors: ["Red", "Yellow", "Green", "Blue", "Orange", "Purple"],
  },
};

const store = createStore(rootReducer, preloadedState, composedEnhancer);

export default store;
