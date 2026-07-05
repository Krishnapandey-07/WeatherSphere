import ForecastCard from "./ForecastCard";
import "../styles/Forecast.css";

function Forecast({ forecast }) {

  if (!forecast || forecast.length === 0) {
    return null;
  }

  return (
    <section className="forecast-section">

      <div className="forecast-grid">

        {forecast.map((day) => (
          <ForecastCard
            key={day.date}
            day={day}
          />
        ))}

      </div>

    </section>
  );
}

export default Forecast;