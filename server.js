const express = require("express");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;

//define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//serve up static assets (hopefully on Heroku)
if (process.env.NOVE_ENV === "production") {
  app.use(express.static("client/build"));
}
// add routes, both API and view
app.use(routes);

//connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactBlog");

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
