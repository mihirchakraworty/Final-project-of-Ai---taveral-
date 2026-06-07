const router = require("express").Router();

const {
fetchWeather
} = require("../controllers/weatherController");

router.get("/:city",fetchWeather);

module.exports = router;