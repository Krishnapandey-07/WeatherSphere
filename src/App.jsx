import "./styles/App.css";

import AnimationBackground from "./components/AnimationBackground";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";

import SectionTitle from "./components/SectionTitle";
import WeatherCard from "./components/WeatherCard";
import Forecast from "./components/Forecast";
import SunInfo from "./components/SunInfo";
import AirQuality from "./components/AirQuality";

import useWeather from "./hooks/useWeather";
import { getBackgroundClass } from "./utils/getBackgroundClass";

function App() {
  const { weather, loading, error, searchWeather, searchCurrentLocation } =
    useWeather();

  const backgroundClass = weather
    ? getBackgroundClass(weather.current.condition.text)
    : "default-bg";

  return (
    <div className={`app ${backgroundClass}`}>
      <AnimationBackground condition={weather?.current?.condition?.text} />

      <div className="container">
        {/* ================= HERO ================= */}

        <section className="hero">
          <div className="hero-icon">🌤️</div>

          <h1>WeatherSphere</h1>

          <p>
            Beautiful real-time weather forecasts with interactive animations
            and detailed weather insights.
          </p>
        </section>

        {/* ================= SEARCH ================= */}

        <SearchBar
          onSearch={searchWeather}
          onLocation={searchCurrentLocation}
          loading={loading}
        />

        {/* ================= LOADING ================= */}

        {loading && <Loader />}

        {/* ================= ERROR ================= */}

        {error && <ErrorMessage message={error} />}

        {/* ================= EMPTY STATE ================= */}

        {!loading && !weather && !error && <EmptyState />}

        {/* ================= WEATHER DATA ================= */}

        {weather && (
          <>
            {/* Current Weather */}

            <section className="section">
              <SectionTitle
                title="Today's Weather"
                subtitle="Current weather conditions"
              />

              <WeatherCard weather={weather} />
            </section>

            {/* Forecast */}

            <section className="section">
              <SectionTitle
                title="3-Day Forecast"
                subtitle="Plan ahead with confidence"
              />

              <Forecast forecast={weather.forecast.forecastday} />
            </section>

            {/* Sun Information */}

            <section className="section">
              <SectionTitle
                title="Sun Information"
                subtitle="Sunrise & Sunset timings"
              />

              <SunInfo astro={weather.forecast.forecastday[0].astro} />
            </section>

            {/* Air Quality */}

            <section className="section">
              <SectionTitle
                title="Air Quality"
                subtitle="Current air quality index"
              />

              <AirQuality air={weather.current.air_quality} />
            </section>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
