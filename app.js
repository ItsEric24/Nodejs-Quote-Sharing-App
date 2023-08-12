const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const quoteRouter = require("./routes/routes");

const app = express();

const dbURl =
  "mongodb+srv://chewbaccam200:iamchampion44b25@cluster0.x2dqfvn.mongodb.net/Quotify?retryWrites=true&w=majority";
mongoose
  .connect(dbURl)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.redirect("/quotes");
});

app.use("/quotes", quoteRouter);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
