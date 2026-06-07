import axios from "axios";

const BASE_URL = "http://localhost:5000";

export const getHotels = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/api/hotels/${city}`
  );
  return response.data;
};

export const getWeather = async (city) => {
  const response = await axios.get(
    `${BASE_URL}/api/weather/${city}`
  );
  return response.data;
};

export const getItinerary = async (city, days) => {
  const response = await axios.post(
    `${BASE_URL}/api/itinerary`,
    { city, days }
  );
  return response.data;
};

export const getBudget = async (data) => {
  const response = await axios.post(
    `${BASE_URL}/api/budget`,
    data
  );
  return response.data;
};