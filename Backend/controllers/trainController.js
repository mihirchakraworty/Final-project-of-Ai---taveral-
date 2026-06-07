const generateTrip = require("../services/geminiService");

const getTrainSuggestions = async (req, res) => {
  try {
    const {
      from,
      to,
      budget,
      travelers,
    } = req.body;

    const prompt = `
You are an Indian Railway travel expert.

Suggest the best train options.

From: ${from}
To: ${to}
Budget: ₹${budget}
Travelers: ${travelers}

Provide:

- Train Name
- Train Number
- Departure Time
- Arrival Time
- Duration
- Class (SL, 3A, 2A, 1A)
- Approx Fare per person
- Total Fare
- Recommendation

Return ONLY valid JSON.

{
  "trains": [
    {
      "name": "",
      "number": "",
      "departure": "",
      "arrival": "",
      "duration": "",
      "class": "",
      "fare_per_person": "",
      "total_fare": "",
      "recommendation": ""
    }
  ]
}
`;

    const response = await generateTrip(prompt);

    const cleanText = response
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const trainData = JSON.parse(cleanText);

    res.json({
      success: true,
      trains: trainData.trains,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Train suggestion failed",
    });
  }
};

module.exports = {
  getTrainSuggestions,
};