// Import Express
const express = require("express");
const app = express();

// Set up PUG
app.set("view engine", "pug");

// Adding root page
app.get("/", (req, res) => {
  res.render("index");
});

// Add caption whenever the server restarts
app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
