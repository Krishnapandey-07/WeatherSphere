import "../styles/ForecastCard.css";

import {
  Wind,
  Droplets,
} from "lucide-react";

function ForecastCard({ day, index }) {

  const date = new Date(day.date);

  const dayName =
    index === 0
      ? "Today"
      : date.toLocaleDateString("en-US", {
          weekday: "long",
        });

  return (

    <div className="forecast-card">

      {/* Day */}

      <h3 className="forecast-day">
        {dayName}
      </h3>

      {/* Weather Icon */}

      <img
        className="forecast-icon"
        src={day.day.condition.icon}
        alt={day.day.condition.text}
      />

      {/* Avg Temp */}

      <h2 className="forecast-temp">

        {Math.round(day.day.avgtemp_c)}°

      </h2>

      {/* Max / Min */}

      <div className="forecast-range">

        <span className="max-temp">

          ↑ {Math.round(day.day.maxtemp_c)}°

        </span>

        <span className="min-temp">

          ↓ {Math.round(day.day.mintemp_c)}°

        </span>

      </div>

      {/* Condition */}

      <p className="forecast-condition">

        {day.day.condition.text}

      </p>

      {/* Bottom Stats */}

      <div className="forecast-extra">

        <div>

          <Droplets size={16} />

          <span>

            {day.day.daily_chance_of_rain}%

          </span>

        </div>

        <div>

          <Wind size={16} />

          <span>

            {Math.round(day.day.maxwind_kph)} km/h

          </span>

        </div>

      </div>

    </div>

  );

}

export default ForecastCard;