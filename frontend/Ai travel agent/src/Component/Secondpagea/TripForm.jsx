import React, { useState } from "react";
import Itinerary from "./Itinerary";

function TripForm() {
  const [formData, setFormData] = useState({
    budget: "",
    days: "",
    travelers: "",
    destination: "",
    description: "",
  });

  const [tripData, setTripData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const generateTrip = async () => {
    if (!formData.destination.trim()) {
      setError("Please enter a destination");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setTripData(null);

      const city = formData.destination;

      const [placeRes, weatherRes, hotelRes, itineraryRes] =
        await Promise.all([
          fetch(`http://localhost:5000/api/place/${city}`),
          fetch(`http://localhost:5000/api/weather/${city}`),
          fetch(`http://localhost:5000/api/hotels/${city}`),

          fetch(`http://localhost:5000/api/itinerary`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              city,
              days: Number(formData.days),
              budget: formData.budget,
              travelers: formData.travelers,
              description: formData.description,
            }),
          }),
        ]);

      const placeData = await placeRes.json();
      const weatherData = await weatherRes.json();
      const hotelData = await hotelRes.json();
      const itineraryData = await itineraryRes.json();

      setTripData({
        place: placeData.place,
        weather: weatherData,
        hotels: hotelData.hotels || [],
        itinerary: itineraryData.itinerary,
      });
    } catch (err) {
      console.error(err);
      setError("Failed to generate trip. Please try again.");
    } finally {
      setLoading(false);
    }
  };

    return (
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
  <div className="grid lg:grid-cols-3 gap-8"></div>
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-white">
          ✈️ AI Travel Planner
        </h2>
        <p className="text-gray-400 mt-3">
          Plan your perfect journey with AI
        </p>
      </div>

      {/* Form */}
      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="number"
          name="budget"
          placeholder="💰 Budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full bg-slate-800/70 border border-slate-700 p-4 rounded-2xl text-white"
        />

        <input
          type="number"
          name="days"
          placeholder="📅 Days"
          value={formData.days}
          onChange={handleChange}
          className="w-full bg-slate-800/70 border border-slate-700 p-4 rounded-2xl text-white"
        />

        <input
          type="number"
          name="travelers"
          placeholder="👥 Travelers"
          value={formData.travelers}
          onChange={handleChange}
          className="w-full bg-slate-800/70 border border-slate-700 p-4 rounded-2xl text-white"
        />

        <input
          type="text"
          name="destination"
          placeholder="📍 Destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full bg-slate-800/70 border border-slate-700 p-4 rounded-2xl text-white"
        />
      </div>

      {/* Description */}
      <textarea
        rows="4"
        name="description"
        placeholder="Tell AI about your dream trip..."
        value={formData.description}
        onChange={handleChange}
        className="w-full mt-5 bg-slate-800/70 border border-slate-700 p-4 rounded-2xl text-white"
      />

      {/* Error */}
      {error && (
        <div className="mt-4 text-center text-red-400">
          {error}
        </div>
      )}

      {/* Button */}
      <button
        onClick={generateTrip}
        disabled={loading}
        className="w-full mt-6 py-4 rounded-2xl font-bold text-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white"
      >
        {loading ? (
          <div className="flex justify-center items-center gap-3">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Generating Your Trip...
          </div>
        ) : (
          "✨ Generate AI Trip"
        )}
      </button>

      {/* Results */}
      {tripData && (
        <div className="mt-10 space-y-6">

          {/* Destination */}
         <div className="mt-6">

  <h3 className="text-cyan-400 text-xl font-bold mb-3">
    🏛 Tourist Attractions
  </h3>

  <div className="bg-slate-800/60 rounded-2xl p-4 text-gray-300 whitespace-pre-wrap">

    {tripData.itinerary
      ?.split("Tourist Attractions:")[1]
      ?.split("Local Foods:")[0]
      ?.trim() || "No attractions available"}

  </div>

</div>
          {/* Weather */}
          <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/20 p-6 rounded-3xl">
            <h2 className="text-cyan-400 text-2xl font-bold">
              🌤 Weather
            </h2>

            <div className="grid md:grid-cols-3 gap-4 mt-5">
              <div className="bg-slate-800 p-4 rounded-2xl">
                <p className="text-gray-400">Temperature</p>
                <h3 className="text-3xl text-white font-bold">
                  {tripData.weather?.main?.temp}°C
                </h3>
              </div>

              <div className="bg-slate-800 p-4 rounded-2xl">
                <p className="text-gray-400">Humidity</p>
                <h3 className="text-3xl text-white font-bold">
                  {tripData.weather?.main?.humidity}%
                </h3>
              </div>

              <div className="bg-slate-800 p-4 rounded-2xl">
                <p className="text-gray-400">Wind Speed</p>
                <h3 className="text-3xl text-white font-bold">
                  {tripData.weather?.wind?.speed} m/s
                </h3>
              </div>
            </div>
          </div>

          {/* Hotels */}
          {tripData.hotels && tripData.hotels.length > 0 && (
            <div className="mt-4">
              <h2 className="text-cyan-400 text-2xl font-bold mb-5">
                🏨 Recommended Hotels
              </h2>
              
              <div className="grid md:grid-cols-2 gap-5">
                {tripData.hotels.map((hotel, index) => (
                  <div
                    key={index}
                    className="bg-slate-700/60 border border-slate-600 p-5 rounded-2xl hover:scale-105 hover:border-cyan-500/40 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white">
                        {hotel.name}
                      </h3>
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full whitespace-nowrap ml-2">
                        {hotel.category}
                      </span>
                    </div>

                    <p className="text-green-400 mt-3">
                      💰 {hotel.approximate_price_per_night}
                    </p>

                    <p className="text-yellow-400 mt-2">
                      ⭐ {hotel.rating}
                    </p>

                    <p className="text-gray-300 mt-2">
                      📍 {hotel.area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Itinerary */}
          <Itinerary itinerary={tripData.itinerary} />

        </div>
      )}
    </div>
  );
}

export default TripForm;