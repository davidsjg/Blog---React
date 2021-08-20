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
}
