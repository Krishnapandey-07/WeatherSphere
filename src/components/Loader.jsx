import "../styles/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p className="loader-text">Loading weather...</p>
    </div>
  );
}

export default Loader;