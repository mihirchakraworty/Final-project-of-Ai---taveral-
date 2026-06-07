const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load Environment Variables
dotenv.config();

// Import Database Connection
const connectDB = require("./config/db");

// Existing Routes
const plannerRoutes = require("./routes/plannerRoutes");
const placeRoutes = require("./routes/placeRoutes");

// New Routes
const weatherRoutes = require("./routes/weatherRoutes");
const hotelRoutes = require("./routes/hotelRoutes");
const trainRoutes = require("./routes/trainRoutes");
const budgetRoutes = require("./routes/budgetRoutes");
const itineraryRoutes = require("./routes/itineraryRoutes");

// Debug Logs
console.log("--- Environment Variables Check ---");
console.log("PORT =", process.env.PORT);
console.log(
  "MONGO_URI =",
  process.env.MONGO_URL
    ? "Loaded Successfully ✅"
    : "Missing ❌"
);
console.log(
  "GEMINI_API_KEY =",
  process.env.GEMINI_API_KEY
    ? "Loaded Successfully ✅"
    : "Missing ❌"
);
console.log("----------------------------------");

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("AI Travel Planner Backend Running 🚀");
});

// Existing APIs
app.use("/api/planner", plannerRoutes);
app.use("/api/place", placeRoutes);

// New APIs
app.use("/api/weather", weatherRoutes);
app.use("/api/hotels", hotelRoutes);
app.use("/api/trains", trainRoutes);
app.use("/api/budget", budgetRoutes);
app.use("/api/itinerary", itineraryRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});