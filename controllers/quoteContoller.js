const Quote = require("../models/quoteSchema");

function getQuotes(req, res) {
  Quote.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "Quotify | Home", quotes: result });
    });
}

function getCreateQuote(req, res) {
  res.render("input", { title: "Quotify | Create quote" });
}

function createQuotes(req, res) {
  const newQuote = new Quote(req.body);

  newQuote
    .save()
    .then((result) => {
      res.redirect("/quotes");
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteQuote(req, res) {
  const quoteId = req.params.id;

  Quote.findByIdAndDelete(quoteId)
    .then((results) => {
      res.json({ message: "Quote deleted" });
      console.log("Quote deleted");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  getQuotes,
  getCreateQuote,
  createQuotes,
  deleteQuote,
};
