import axios from "axios";

export default {
  //gets all posts
  getPosts: function () {
    return axios.get("/api/posts");
  },
  //gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/posts/" + id);
  },
  //deletes the post with the given id
  deletePost: function (id) {
    return axios.delete("/api/posts/" + id);
  },

  savePost: function (postData) {
    return axios.post("/api/posts", postData);
  },
};
