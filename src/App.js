import { useEffect, useState } from 'react';

import { fetchWeather } from './api/api';
import useSnackBars from './utils/useSnackBars';

import { Form } from './components/Form/Form';
import { WeatherList } from './components/WeatherList/WeatherList';
import { SnackBar } from './components/SnackBar/SnackBar';
import styles from './App.module.scss';

function App() {
  const [weatherData, setWeatherData] = useState()
  const { alerts, addAlert } = useSnackBars()

  // TODO: for dev only, remove later
  // useEffect(() => {
  //   if (!weatherData) {
  //     getWeatherData({ longitude: '16', latitude: '55' })
  //   }
  // }, [weatherData])
  
  async function getWeatherData({longitude, latitude}) {
    try {
      const data = await fetchWeather(longitude, latitude)
      setWeatherData(data)
      //TODO remove later
      addAlert({
        message: `Successfully fetched forecast for lon: ${longitude} and lat: ${latitude}`,
        severity: 'success',
      })
    } catch (error) {
      addAlert({
        message: error.message,
        severity: 'danger',
      })
    }
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img src="./logo512.png" alt="Cloud and sun illustration"/>
        <h1>Weather by numbers</h1>
      </header>
      <main className={styles.main}>
        <Form onSubmit={getWeatherData}/>
        {weatherData && <WeatherList weatherData={weatherData}/>}
      </main>

      <div className={styles.snackbarWrapper}>
        <div className={styles.snackbars}>
        {alerts.map((alert, index) => {
          return (
            <SnackBar 
              key={index} 
              message={alert.message} 
              severity={alert.severity}
              index={index}
            />
          )
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
