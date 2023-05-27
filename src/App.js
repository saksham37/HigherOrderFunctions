import "./styles.css";
import SearchTodos from "./TodoList";
import SearchUsers from "./UsersList";
export default function App() {
  return (
    <>
      <div className="App">
        <h1> Higher Order Component </h1>
        <div style={{ display: "flex" }}>
          <SearchTodos />
          <SearchUsers />
        </div>
      </div>
    </>
  );
}
