import React, { useState } from "react";
import { useDispatch } from "react-redux";
import store from "../../store";

function TodoInput() {
  const [text, setText] = useState("");
  const [postId, setPostId] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => setText(e.target.value);
  const handleChange2 = (e) => setPostId(e.target.value);

  // store.dispatch({ type: "todos/todoDelete", payload: 3 });

  const handleClick = (data) => {
    dispatch({ type: "todos/todoAdded", payload: data });
  };

  const handleClick2 = (id) => {
    console.log(id);
    dispatch({ type: "todos/todoDeleted", payload: id });
  };

  const handleKeyDown = (e) => {
    const trimmedText = e.target.value.trim();

    console.log(trimmedText);

    if (e.key === "Enter" && trimmedText) {
      // dispatch({ type: "todos/todoAdded", payload: trimmedText });
      handleClick(trimmedText);
      // setText("");
    }
  };
  const handleKeyDown2 = (e) => {
    const trimmedText = e.target.value.trim();

    console.log(trimmedText);

    if (e.key === "Enter" && trimmedText) {
      // dispatch({ type: "todos/todoAdded", payload: trimmedText });
      handleClick2(parseInt(trimmedText));
      // setText("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter something ToDo"
        autoFocus={true}
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>add todo</button>
      <input
        type="text"
        placeholder="Enter todo ID to delete"
        autoFocus={true}
        value={postId}
        onChange={handleChange2}
        onKeyDown={handleKeyDown2}
      />
      <button onClick={handleClick2}>delete todo</button>
    </>
  );
}

export default TodoInput;
