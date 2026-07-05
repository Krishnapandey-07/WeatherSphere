import "../styles/AnimationBackground.css";

function AnimationBackground({ condition }) {

  const weather = condition?.toLowerCase() ?? "";

  function createParticles(count, className, minSpeed, maxSpeed) {

    return [...Array(count)].map((_, index) => (

      <span
        key={index}
        className={className}
        style={{
          left: `${Math.random() * 100}%`,
          animationDuration: `${
            minSpeed + Math.random() * (maxSpeed - minSpeed)
          }s`,
          animationDelay: `${Math.random() * 2}s`,
        }}
      />

    ));

  }

  if (weather.includes("rain")) {

    return (
      <div className="animation rain">

        {createParticles(120, "rain-drop", 0.5, 1.5)}

      </div>
    );

  }

  if (weather.includes("snow")) {

    return (
      <div className="animation snow">

        {createParticles(80, "snow-flake", 2, 5)}

      </div>
    );

  }

  if (weather.includes("cloud")) {

    return (

      <div className="animation clouds">

        <div className="cloud cloud1"></div>
        <div className="cloud cloud2"></div>
        <div className="cloud cloud3"></div>

      </div>

    );

  }

  return null;

}

export default AnimationBackground;