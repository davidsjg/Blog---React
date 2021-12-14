import { createStore } from "redux";
import rootReducer from "./reducer";

let preloadedState = {
  todos: [{ id: 0, text: "Learn Redux", completed: false, color: "purple" }],
  filters: {
    status: "all",
    colors: ["Red", "Yellow", "Green", "Blue", "Orange", "Purple"],
  },
};

const store = createStore(rootReducer, preloadedState);

export default store;
