// Redux Core

// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
// import rootReducer from "./reducer";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

// Redux Toolkit
import { configureStore } from "@reduxjs/toolkit";
import { filterSlice } from "../components/Filters/FiltersSlice";
import { todoListSlice } from "../components/TodoList/TodoSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
