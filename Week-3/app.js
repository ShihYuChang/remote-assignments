// Import Express & other modules
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
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

// Check cookies

app.get("/myName", (req, res) => {
  if (req.query.name) {
    if (req.cookies.username) {
      res.send(`Done! Welcome aboard ${req.cookies.username}`);
    } else {
      res.redirect("/myName");
    }
  } else {
    res.render("myName");
  }
});

app.post("/myName", (req, res) => {
  let userName = req.body.username;
  res.cookie("username", userName);
  res.redirect("/myName" + `?name=${userName}`);
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
