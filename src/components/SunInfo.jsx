import "../styles/SunInfo.css";

import {
  Sunrise,
  Sunset,
  Moon,
  CalendarDays,
} from "lucide-react";

function SunInfo({ astro }) {

  if (!astro) return null;

  const sunData = [
    {
      icon: <Sunrise size={34} />,
      title: "Sunrise",
      value: astro.sunrise,
    },
    {
      icon: <Sunset size={34} />,
      title: "Sunset",
      value: astro.sunset,
    },
    {
      icon: <Moon size={34} />,
      title: "Moon Phase",
      value: astro.moon_phase,
    },
    {
      icon: <CalendarDays size={34} />,
      title: "Moon Illumination",
      value: `${astro.moon_illumination}%`,
    },
  ];

  return (

    <section className="sun-info">

      {sunData.map((item) => (

        <div
          className="sun-card"
          key={item.title}
        >

          <div className="sun-icon">
            {item.icon}
          </div>

          <h3>{item.title}</h3>

          <p>{item.value}</p>

        </div>

      ))}

    </section>

  );

}

export default SunInfo;