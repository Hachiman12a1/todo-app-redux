// Redux Core

// const initState = [
//   { id: 1, name: "Learn Yoga", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//   { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default todoListReducer;

// Redux Toolkit

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
  name: "todoList",
  initialState: {
    status: "idle",
    todos: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
    removeTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      console.log({ action });
      state.status = "idle";
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("/api/todos");
  const data = await res.json();
  return data.todos;
});

// => todos/fetchTodos/pending
// => todos/fetchTodos/fullfilled
// todos/fetchTodos/rejected

// action (object) va action creators () => { return action }
// thunk action (function) va thunk action creators () => { return thunk action  }

// export function addToDos(todo) {
//   //Thunk function - thunk action
//   return function addTodosThunk(dispatch, getState) {
//     console.log(getState());
//     console.log({ todo });
//     // custom
//     todo.name = "Dat";
//     dispatch(todoListSlice?.actions?.addTodo(todo));

//     console.log(getState());
//   };
// }
