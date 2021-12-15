import React from "react";

function TodoListItem({ todo }) {
  return (
    <div>
      <p>
        <span>Title: </span>
        {todo.text} <span>:: id: {todo.id}</span>
      </p>
    </div>
  );
}

export default TodoListItem;
