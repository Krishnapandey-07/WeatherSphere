import { useState } from "react";
import "../styles/SearchBar.css";

import {
  Search,
  LocateFixed,
} from "lucide-react";

function SearchBar({
  onSearch,
  onLocation,
  loading,
}) {
  const [city, setCity] = useState("");

  function handleSearch() {
    const trimmedCity = city.trim();

    if (!trimmedCity || loading) return;

    onSearch(trimmedCity);

    setCity("");
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  return (
    <div className="search-wrapper">

      <div className="search-container">

        <div className="input-box">

          <Search
            size={20}
            className="input-icon"
          />

          <input
            type="text"
            placeholder="Search any city..."
            value={city}
            autoFocus
            spellCheck={false}
            disabled={loading}
            aria-label="Search City"
            onChange={(e) =>
              setCity(e.target.value)
            }
            onKeyDown={handleKeyDown}
          />

        </div>

        <button
          className="search-btn"
          onClick={handleSearch}
          disabled={loading}
        >

          <Search size={18} />

          <span>
            {loading
              ? "Searching..."
              : "Search"}
          </span>

        </button>

        <button
          className="location-btn"
          onClick={onLocation}
          disabled={loading}
        >

          <LocateFixed size={18} />

          <span>My Location</span>

        </button>

      </div>

    </div>
  );
}

export default SearchBar;