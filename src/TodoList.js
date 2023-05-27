import React from "react";
import HigherOrderComponent from "./HOC";
const TodoList = ({ data }) => {
  const renderData = data.map((todos) => {
    return <div key={todos.id}> Title: {todos.title}</div>;
  });
  return (
    <>
      <div>{renderData}</div>
    </>
  );
};
const SearchTodos = HigherOrderComponent(TodoList, "todos");
export default SearchTodos;
