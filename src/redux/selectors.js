import { createSelector } from "reselect";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const todoListSelector = (state) => state.todoList;

// reselect
export const todaysRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  (todoList, searchText, status) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return todo.name.includes(searchText);
      }

      return todo.name.includes(searchText) && status === "Completed"
        ? todo.completed
        : !todo.completed;
    });
  }
);
