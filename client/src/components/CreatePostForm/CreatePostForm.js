import React, { useRef } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import API from "../../utils/API";
import { ADD_POST, LOADING } from "../../utils/actions";

function CreatePostForm() {
  const titleRef = useRef();
  const bodyRef = useRef();
  const authorRef = useRef();
  const [state, dispatch] = useStoreContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: LOADING });
    API.savePost({
      title: titleRef.current.value,
      body: bodyRef.current.value,
      author: authorRef.current.value,
    })
      .then((result) => {
        dispatch({
          type: ADD_POST,
          post: result.date,
        });
      })
      .catch((err) => console.log(err));

    titleRef.current.value = "";
    bodyRef.current.value = "";
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://www.artmarketstudies.org/wp-content/uploads/2016/10/blogging.jpg"
        />
      </div>
      <h1>Create a blog post</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <input
          className="form-control mb-5"
          required
          ref={titleRef}
          placeholder="Title"
        />
        <textarea
          className="form-control mb-5"
          required
          ref={BodyRef}
          placeholder="Screen name"
        />
        <input
          className="form-control mb-5"
          ref={authorRef}
          placeholder="screen name"
        />
        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        />
        Save Post!
      </form>
    </div>
  );
}
