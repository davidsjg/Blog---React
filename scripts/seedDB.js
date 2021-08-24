const mongoose = require("mongoose");
const db = require("../LakeModel");

// This file empties the destination collection and inserts the destinations below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testMONGO");

const lakeSeed = [
  {
    lake: "Heart Lake",
    fish: "mixed",
    distance: 2.5,
  },
  {
    lake: "Shelf Lake",
    fish: "cutthroat",
    distance: 8,
  },
];

db.Lake.remove({})
  .then(() => db.Lake.collection.insertMany(lakeSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
