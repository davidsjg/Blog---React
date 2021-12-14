const mongoose = require("mongoose");
const db = require("../models");

// This file empties the destination collection and inserts the destinations below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/TodoReduxOEM");

const todoSeed = [
  {
    title: "clean fridge",
    content: "Need to clean the fridge",
  },
  {
    title: "make dinner",
    content: "gotta make them foods",
  },
];

db.Todo.remove({})
  .then(() => db.Todo.collection.insertMany(todoSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
