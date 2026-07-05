import { useState, useRef } from "react";
import {
  getWeather,
  getWeatherByCoordinates,
} from "../services/weatherApi";

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // helps prevent old requests overriding new ones
  const abortRef = useRef(false);

  function resetStates() {
    setLoading(true);
    setError("");
    abortRef.current = false;
  }

  async function searchWeather(city) {
    resetStates();

    try {
      const data = await getWeather(city);

      if (abortRef.current) return;

      setWeather(data);
    } catch (err) {
      if (abortRef.current) return;

      setError(err?.message || "Something went wrong");
      setWeather(null);
    } finally {
      if (!abortRef.current) setLoading(false);
    }
  }

  function searchCurrentLocation() {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    resetStates();

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;

          const data = await getWeatherByCoordinates(
            latitude,
            longitude
          );

          if (abortRef.current) return;

          setWeather(data);
        } catch (err) {
          if (abortRef.current) return;

          setError(err?.message || "Failed to fetch weather");
          setWeather(null);
        } finally {
          if (!abortRef.current) setLoading(false);
        }
      },

      (err) => {
        if (abortRef.current) return;

        setError("Location permission denied.");
        setLoading(false);
      }
    );
  }

  // optional: cancel ongoing operations
  function cancelRequests() {
    abortRef.current = true;
    setLoading(false);
  }

  return {
    weather,
    loading,
    error,
    searchWeather,
    searchCurrentLocation,
    cancelRequests,
  };
}

export default useWeather;