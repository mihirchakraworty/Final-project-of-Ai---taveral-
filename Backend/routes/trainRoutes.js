const express = require("express");
const router = express.Router();

const {
  getTrainSuggestions,
} = require("../controllers/trainController");

router.post("/", getTrainSuggestions);

module.exports = router;