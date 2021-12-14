import React from "react";
import styles from "./Home.module.css";

function Home() {
  const handleSubmit = (data) => {};

  return (
    <>
      <div className={styles["container"]}>
        <form className={styles["form"]} onSubmit={handleSubmit}>
          <p>Hello and welcome to the ToDo App!</p>
          <p>Enter a todo item:</p>
          <div>
            <p>Todo Title</p>
            <input type="text" className="todoName" />
          </div>
          <div>
            <p>Todo Content</p>
            <input type="text" className="todoContent" />
          </div>
          <div>
            <button type="submit">Enter Todo</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Home;
