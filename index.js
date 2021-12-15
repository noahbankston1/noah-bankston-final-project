const express = require("express");
const ejs = require("ejs");


// Create express app
const app = express();

// Initialize Body Parser Middleware to parse data sent by users in the request object
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse HTML form data

// Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

// Home Page route
app.get("/", (req, res) => {
  res.render("index");
});

// Asia route
app.get("/asia", (req, res) => {
  res.render("html/asia");
});

// North America route
app.get("/northamerica", (req, res) => {
  res.render("html/northamerica");
});

// South America route
app.get("/southamerica", (req, res) => {
  res.render("html/southamerica");
});

// Europe route
app.get("/europe", (req, res) => {
    res.render("html/europe");
  });



// Setup server ports
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));