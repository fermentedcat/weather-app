import { useState } from 'react';
import './App.css';
import { fetchWeather } from './api/api';
import { Form } from './components/Form/Form';
import { WeatherList } from './components/WeatherList/WeatherList';

function App() {
  const [error, setError] = useState({})
  const [weatherData, setWeatherData] = useState()

  async function getWeatherData({longitude, latitude}) {
    try {
      const data = await fetchWeather(longitude, latitude)
      setError({})
      setWeatherData(data)
    } catch (error) {
      setError(error)
    }
  }

  return (
    <div>
      <Form onSubmit={getWeatherData}/>
      {weatherData && <WeatherList weatherData={weatherData}/>}
      {error.message && <p>{error.message}</p>}
    </div>
  );
}

export default App;
