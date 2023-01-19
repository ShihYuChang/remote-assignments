// Import Express
const express = require("express");
const app = express();
app.use(express.static(__dirname + "/Assignment-3"));

// Set up PUG
app.set("view engine", "pug");

// Create the root page
app.get("/", (req, res) => {
  res.render("index");
});

// Create the calculation route
app.get("/getData", (req, res) => {
  const QueryStringNum = req.query.number;
  const Num = Number(QueryStringNum);
  let FinalTotal;
  if (!QueryStringNum) {
    FinalTotal = `<h1>Lack of Parameter</h1>`;
  } else if (isNaN(Num)) {
    FinalTotal = `<h1>Wrong Parameter</h1>`;
  } else {
    FinalTotal = `<h1>${((Num + 1) * Num) / 2}</h1>`;
  }
  res.send(`${FinalTotal}`);
});

// Error Handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render("error");
});

// Add caption whenever the server restarts
app.listen(3000, () => {
  console.log("The application is running on localhost:3000");
});
