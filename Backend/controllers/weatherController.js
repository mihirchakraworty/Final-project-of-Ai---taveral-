const getWeather = require("../services/weatherService");

const fetchWeather = async (req, res) => {
  try {
    const city = req.params.city;

    const data = await getWeather(city);

    res.status(200).json(data);

  } catch (error) {

    console.error("Weather API Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = { fetchWeather };