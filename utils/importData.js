require("dotenv").config({ path: "./config.env" });
const fs = require("fs");
const db = require("../models");
const connectDB = require("../config/db");

connectDB();

const todos = JSON.parse(fs.readFileSync(`${__dirname}/todos.json`, "utf-8"));

const importData = async () => {
  try {
    await db.Todo.create(todos);
    console.log("Data Successfully imported 👌");
    process.exit();
  } catch (error) {
    console.log(`ERROR 💥: ${error}`);
    process.exit(1);
  }
};

const deleteData = async () => {
  try {
    await db.Todo.deleteMany({});
    console.log("Data successfully deleted");
    process.exit();
  } catch (error) {
    console.log(`ERROR 💥: ${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
