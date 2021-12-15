import React from "react";

function TodoListItem({ todo }) {
  return (
    <div>
      <p>{todo.text}</p>
    </div>
  );
}

export default TodoListItem;
