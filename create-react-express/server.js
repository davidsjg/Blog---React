const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//add routes, both API and view
app.use(routes);

//connect to the MONGO DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/blogReact");

//start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
