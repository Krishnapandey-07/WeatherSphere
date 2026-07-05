import "../styles/WeatherDetails.css";

import {
  Droplets,
  Wind,
  Thermometer,
  Gauge,
  Eye,
  Compass,
} from "lucide-react";

function WeatherDetails({ current }) {
  const details = [
    {
      icon: <Droplets size={30} />,
      title: "Humidity",
      value: `${current.humidity}%`,
    },
    {
      icon: <Wind size={30} />,
      title: "Wind Speed",
      value: `${Math.round(current.wind_kph)} km/h`,
    },
    {
      icon: <Thermometer size={30} />,
      title: "Feels Like",
      value: `${Math.round(current.feelslike_c)}°C`,
    },
    {
      icon: <Gauge size={30} />,
      title: "Pressure",
      value: `${current.pressure_mb} mb`,
    },
    {
      icon: <Eye size={30} />,
      title: "Visibility",
      value: `${current.vis_km} km`,
    },
    {
      icon: <Compass size={30} />,
      title: "Wind Direction",
      value: current.wind_dir,
    },
  ];

  return (
    <section className="details-section">

      <h3 className="details-title">
        Today's Highlights
      </h3>

      <div className="weather-details">

        {details.map((detail) => (
          <div
            className="detail-card"
            key={detail.title}
          >
            <div className="detail-icon">
              {detail.icon}
            </div>

            <p className="detail-title">
              {detail.title}
            </p>

            <h2 className="detail-value">
              {detail.value}
            </h2>
          </div>
        ))}

      </div>

    </section>
  );
}

export default WeatherDetails;