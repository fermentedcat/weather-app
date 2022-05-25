import React from 'react'
import * as weatherIcons from 'react-icons/wi'

import { getReactSymbol, getTemp, getUnicodeSymbol } from '../../utils/weather'
import styles from './WeatherItemDetails.module.scss'


export const WeatherItemDetails = ({ timeStamp, date, params, variant, children }) => {
  const temperature = getTemp(params)

  const unicode = getUnicodeSymbol(params)
  const icon = getReactSymbol(params, date)
  const WeatherIcon = weatherIcons[icon]
  
  return (
    <div className={`${styles.wrapper} ${styles[variant]}`}>
      <p className={styles.timeStamp}>
        {timeStamp}
      </p>
      {children}
      <div className={styles.weather}>
        {WeatherIcon 
          ? <WeatherIcon className={styles.icon}/> 
          : <p className={styles.icon}>{unicode}</p>
        }
        <p>{temperature} C°</p>
      </div>
    </div>
  )
}
