import { CloudSun } from "lucide-react";
import "../styles/EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">

      <div className="icon">
        <CloudSun size={90} />
      </div>

      <h2>Search for a City</h2>

      <p>
        Get real-time weather updates, 3-day forecasts, sunrise & sunset timings,
        and air quality information.
      </p>

    </div>
  );
}

export default EmptyState;