import "../styles/AirQuality.css";

import {
  Wind,
  Leaf,
  Gauge,
  Activity,
} from "lucide-react";

function AirQuality({ air }) {

  if (!air) return null;

  function getAQIStatus(index) {

    switch (index) {

      case 1:
        return "🟢 Good";

      case 2:
        return "🟡 Moderate";

      case 3:
        return "🟠 Unhealthy for Sensitive Groups";

      case 4:
        return "🔴 Unhealthy";

      case 5:
        return "🟣 Very Unhealthy";

      case 6:
        return "⚫ Hazardous";

      default:
        return "Unknown";

    }

  }

  const pollutants = [

    {
      name: "CO",
      value: air.co.toFixed(1),
    },

    {
      name: "NO₂",
      value: air.no2.toFixed(1),
    },

    {
      name: "O₃",
      value: air.o3.toFixed(1),
    },

    {
      name: "SO₂",
      value: air.so2.toFixed(1),
    },

    {
      name: "PM2.5",
      value: air.pm2_5.toFixed(1),
    },

    {
      name: "PM10",
      value: air.pm10.toFixed(1),
    },

  ];

  return (

    <section className="air-quality">

      <div className="aqi-header">

        <div className="aqi-title">

          <Wind size={28} />

          <h2>Air Quality</h2>

        </div>

        <div className="aqi-status">

          <Gauge size={20} />

          <span>

            {getAQIStatus(air["us-epa-index"])}

          </span>

        </div>

      </div>

      <div className="aqi-main-card">

        <Activity size={42} />

        <h1>

          AQI {air["us-epa-index"]}

        </h1>

        <p>

          {getAQIStatus(air["us-epa-index"])}

        </p>

      </div>

      <div className="aqi-grid">

        {pollutants.map((item) => (

          <div
            className="aqi-card"
            key={item.name}
          >

            <Leaf
              size={24}
              className="aqi-icon"
            />

            <h3>{item.name}</h3>

            <p>{item.value}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default AirQuality;