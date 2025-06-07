import React, { useState, useEffect, useCallback } from "react";

const getWeatherIcon = (conditionCode) => {
  if (conditionCode >= 200 && conditionCode < 300) return "fas fa-bolt";
  if (conditionCode >= 300 && conditionCode < 400) return "fas fa-cloud-rain";
  if (conditionCode >= 500 && conditionCode < 600)
    return "fas fa-cloud-showers-heavy";
  if (conditionCode >= 600 && conditionCode < 700) return "fas fa-snowflake";
  if (conditionCode >= 700 && conditionCode < 800) return "fas fa-smog";
  if (conditionCode === 800) return "fas fa-sun";
  if (conditionCode === 801) return "fas fa-cloud-sun";
  if (conditionCode > 801 && conditionCode < 900) return "fas fa-cloud";
  return "fas fa-question-circle";
};

function WeatherWidget() {
  const [weatherData, setWeatherData] = useState(null);
  const [currentTime, setCurrentTime] = useState("");
  const [error, setError] = useState(null);

  const fetchWeatherData = useCallback(() => {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const city = "Sydney";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},AU&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
      .then((response) => {
        if (response.status === 401) throw new Error("Invalid API Key.");
        if (!response.ok) throw new Error("Weather data not available.");
        return response.json();
      })
      .then((data) => {
        // FIX for NaN: Check if data.wind exists before using it
        const windInKmh =
          data.wind && data.wind.speed ? Math.round(data.wind.speed * 3.6) : 0;

        setWeatherData({
          description: data.weather[0].main, // Using main description like "Stormy"
          icon: getWeatherIcon(data.weather[0].id),
          location: data.name,
          celsius: Math.round(data.main.temp),
          wind: windInKmh,
          humidity: data.main.humidity,
        });
        const timeString = new Date().toLocaleTimeString("en-AU", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
        });
        setCurrentTime(timeString.toUpperCase());
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching weather:", err);
        setError(err.message);
      });
  }, []);

  useEffect(() => {
    fetchWeatherData();
    const intervalId = setInterval(fetchWeatherData, 60000); // 1 minute
    return () => clearInterval(intervalId);
  }, [fetchWeatherData]);

  if (error) {
    return (
      <div className="project-card weather-widget-card">Error: {error}</div>
    );
  }

  if (!weatherData) {
    return <div className="project-card weather-widget-card">Loading...</div>;
  }

  // New JSX Structure based on your latest image
  return (
    <div className="project-card weather-widget-card">
      <div className="weather-header">
        <span className="location">{weatherData.location}</span>
        <span className="time">{currentTime}</span>
      </div>

      <div className="weather-body">
        <span className="temperature">{weatherData.celsius}°C</span>
        <span className="description">{weatherData.description}</span>
      </div>

      <div className="weather-footer">
        <div className="stats-list">
          <div className="stat-item">
            <i className="fas fa-wind"></i>{" "}
            {/* FIX: Using 'fas' for a valid icon */}
            <span>{weatherData.wind} km/h</span>
          </div>
          <div className="stat-item">
            <i className="fas fa-tint"></i>{" "}
            {/* FIX: Using 'fas' for a valid icon */}
            <span>{weatherData.humidity}%</span>
          </div>
        </div>
        <i className={`weather-icon ${weatherData.icon}`}></i>
      </div>
    </div>
  );
}

export default WeatherWidget;
