// Redux Core

// const initState = {
//   search: "",
//   status: "All",
//   priorities: [],
// };

// const filtersReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };

//     case "filters/priorityFilterChange":
//       return {
//         ...state,
//         priorities: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default filtersReducer;

// Redux Toolkit
import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      //mutation || IMMER
      state.search = action.payload;
    }, //=> {type : 'filters/searchFilterChange}
    statusFilterChange: (state, action) => {
      state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});
