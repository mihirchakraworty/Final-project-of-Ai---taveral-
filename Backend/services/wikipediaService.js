const axios = require("axios");

const getPlaceInfo = async (place) => {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        place
      )}`,
      {
        headers: {
          "User-Agent": "AI-Travel-Planner/1.0",
        },
      }
    );

    return {
      title: response.data.title,
      description: response.data.extract,
      image: response.data.originalimage?.source,
      attractions: [],
    };
  } catch (error) {
    throw new Error("Failed to fetch place information");
  }
};

module.exports = getPlaceInfo;