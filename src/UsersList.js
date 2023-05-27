import React from "react";
import HigherOrderComponent from "./HOC";
const UsersList = ({ data }) => {
  // props -->> props.data
  const renderData = data.map((user) => {
    return <div key={user.id}> Name: {user.name}</div>;
  });
  return <div>{renderData}</div>;
};
const SearchUsers = HigherOrderComponent(UsersList, "users");

export default SearchUsers;
