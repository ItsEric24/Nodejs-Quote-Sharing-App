const express = require("express");
const quoteController = require("../controllers/quoteContoller");
const router = express.Router();

router.get("/", quoteController.getQuotes);

router.get("/create", quoteController.getCreateQuote);

router.post("/", quoteController.createQuotes);

router.delete("/:id", quoteController.deleteQuote);

module.exports = router;