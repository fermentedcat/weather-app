import { useEffect, useState } from 'react';
import { fetchWeather } from './api/api';
import { Form } from './components/Form/Form';
import { WeatherList } from './components/WeatherList/WeatherList';
import styles from './App.module.scss';

function App() {
  const [error, setError] = useState({})
  const [weatherData, setWeatherData] = useState()

  // TODO: remove later
  useEffect(() => {
    if (!weatherData) {
      getWeatherData({ longitude: '16', latitude: '55' })
    }
  }, [weatherData])

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
    <div className={styles.wrapper}>
      <Form onSubmit={getWeatherData}/>
      {weatherData && <WeatherList weatherData={weatherData}/>}
      {error.message && <p>{error.message}</p>}
    </div>
  );
}

export default App;
