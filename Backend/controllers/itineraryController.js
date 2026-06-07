const generateTrip = require("../services/geminiService");

const generateItinerary = async (req, res) => {
  try {
    const {
      city,
      days,
      budget,
      travelers,
      description,
    } = req.body;

    const prompt = `
You are an expert travel planner.

Create a professional travel itinerary.

Destination: ${city}
Duration: ${days} days
Budget: ₹${budget}
Travelers: ${travelers}

User Preferences:
${description}

Instructions:

1. Create a day-wise itinerary.
2. Each day must include:
   - Morning
   - Afternoon
   - Evening
   - Night

3. Recommend:
   - Famous tourist attractions
   - Local food places
   - Budget-friendly activities
   - Transportation tips

4. Keep activities realistic and geographically practical.

5. Include estimated daily spending.

6. Suggest 3 famous tourist attractions at the end.

7. Suggest 3 local foods to try.

Format exactly like:

Day 1

Morning:
...

Afternoon:
...

Evening:
...

Night:
...

Estimated Cost:
₹...

Day 2

Morning:
...

Afternoon:
...

Evening:
...

Night:
...

Estimated Cost:
₹...

Tourist Attractions:
1.
2.
3.

Local Foods:
1.
2.
3.
`;

    const itinerary = await generateTrip(prompt);

    res.json({
      success: true,
      city,
      days,
      itinerary,
    });

  } catch (error) {
    console.error("Itinerary Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to generate itinerary",
    });
  }
};

module.exports = {
  generateItinerary,
};