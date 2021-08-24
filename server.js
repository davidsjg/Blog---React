const mongoose = require("mongoose");

const Example = require("./LakeModel.js");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/testMONGO", {
  useNewUrlParser: true,
});

// const data = {
//   lake: "Heart Lake",
//   fishType: "Cutthroad & Lake Trout",
//   distance: 9,
// };

// Example.create(data)
//   .then((dbExample) => {
//     console.log(dbExample);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });
