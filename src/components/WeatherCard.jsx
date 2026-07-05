import "../styles/WeatherCard.css";

import WeatherDetails from "./WeatherDetails";

import {
  MapPin,
  Clock3,
  CalendarDays,
  Thermometer,
} from "lucide-react";

function WeatherCard({ weather }) {
  if (!weather) return null;

  const { location, current } = weather;

  const [date, time] = location.localtime.split(" ");

  const day = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <div className="weather-card">

      {/* ================= LEFT SECTION ================= */}

      <div className="weather-left">

        <img
          src={current.condition.icon}
          alt={current.condition.text}
          className="weather-icon"
        />

        <h1 className="temperature">
          {Math.round(current.temp_c)}°
        </h1>

        <div className="feels-like">

          <Thermometer size={16} />

          <span>
            Feels Like {Math.round(current.feelslike_c)}°C
          </span>

        </div>

      </div>

      {/* ================= RIGHT SECTION ================= */}

      <div className="weather-right">

        <h2 className="condition">
          {current.condition.text}
        </h2>

        <div className="location">

          <MapPin size={18} />

          <span>
            {location.name},
            {" "}
            {location.region},
            {" "}
            {location.country}
          </span>

        </div>

        <div className="updated">

          <Clock3 size={16} />

          <span>
            Last Updated: {time}
          </span>

        </div>

        <WeatherDetails current={current} />

      </div>

      {/* ================= FOOTER ================= */}

      <div className="weather-footer">

        <div className="footer-item">

          <CalendarDays size={17} />

          <span>{day}</span>

        </div>

        <div className="footer-item">

          <Clock3 size={17} />

          <span>{time}</span>

        </div>

      </div>

    </div>
  );
}

export default WeatherCard;