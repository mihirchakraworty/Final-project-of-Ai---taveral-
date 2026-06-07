const generateTrip = require("../services/geminiService");

const fetchHotels = async (req, res) => {
  try {
    const { city } = req.params;

    const prompt = `
Suggest 6 hotels in ${city}.

Return ONLY valid JSON.

{
  "hotels":[
    {
      "name":"",
      "rating":"",
      "approximate_price_per_night":"",
      "category":"",
      "area":""
    }
  ]
}
`;

    const result = await generateTrip(prompt);

    const cleanText = result
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let hotelData;

    try {
      hotelData = JSON.parse(cleanText);
    } catch (parseError) {
      console.log("Invalid JSON from Gemini");

      return res.json({
        hotels: [
          {
            name: "Hotel Paradise",
            rating: "4.5",
            approximate_price_per_night: "₹2500",
            category: "Budget",
            area: city,
          },
          {
            name: "City Residency",
            rating: "4.3",
            approximate_price_per_night: "₹1800",
            category: "Standard",
            area: city,
          },
        ],
      });
    }

    res.json(hotelData);

  } catch (error) {
    console.error("Hotel Error:", error);

    res.status(500).json({
      success: false,
      message: "Hotel generation failed",
    });
  }
};

module.exports = { fetchHotels };