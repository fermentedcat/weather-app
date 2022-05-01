import { useEffect, useState } from 'react';
import { fetchWeather } from './api/api';
import { Form } from './components/Form/Form';
import { WeatherList } from './components/WeatherList/WeatherList';
import styles from './App.module.scss';
import useSnackBars from './utils/useSnackBars';

function App() {
  const [weatherData, setWeatherData] = useState()
  const {messages, addMessage} = useSnackBars()

  // TODO: for dev only, remove later
  useEffect(() => {
    if (!weatherData) {
      getWeatherData({ longitude: '16', latitude: '55' })
    }
  }, [weatherData])
  
  async function getWeatherData({longitude, latitude}) {
    try {
      const data = await fetchWeather(longitude, latitude)
      setWeatherData(data)
      addMessage(longitude)
    } catch (error) {
      addMessage(error.message)
    }
  }

  return (
    <div className={styles.wrapper}>
      <header><h1>Weather by numbers</h1></header>
      <section className={styles.main}>
        <Form onSubmit={getWeatherData}/>
        {weatherData && <WeatherList weatherData={weatherData}/>}
      </section>
      {messages.map((message) => <p key={message}>{message}</p>)}
    </div>
  );
}

export default App;
