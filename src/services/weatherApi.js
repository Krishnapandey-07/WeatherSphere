const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

if (!API_KEY) {
  throw new Error("Missing VITE_WEATHER_API_KEY in .env file");
}

const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

// reusable fetch function
async function fetchWeather(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&days=3&aqi=yes&alerts=no`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000); // 8 sec timeout

  try {
    const response = await fetch(url, {
      signal: controller.signal,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data?.error?.message || "Failed to fetch weather");
    }

    return data;
  } catch (err) {
    if (err.name === "AbortError") {
      throw new Error("Request timed out. Try again.");
    }
    throw err;
  } finally {
    clearTimeout(timeout);
  }
}

// 🌆 by city name
export function getWeather(city) {
  return fetchWeather(city);
}

// 📍 by coordinates
export function getWeatherByCoordinates(latitude, longitude) {
  return fetchWeather(`${latitude},${longitude}`);
}