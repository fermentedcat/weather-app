import React, { useRef } from 'react'
import * as weatherIcons from 'react-icons/wi'
import { checkIsToday, getDate, getFormattedDate, getTime } from '../../utils/date'
import { getReactSymbol, getTemp } from '../../utils/weather'
import styles from './WeatherListItem.module.scss'

export const WeatherListItem = ({ date, params, variant, hours, isActive, onClick }) => {
  const temperature = getTemp(params)
  const icon = getReactSymbol(params, date)
  const isToday = checkIsToday(date)
  const WeatherIcon = weatherIcons[icon]
  const ref = useRef()

  function handleClickOnItem() {
    ref.current.click()
  }
  
  return (
    <div className={`${styles.wrapper} ${styles[variant]}`} onClick={handleClickOnItem}>
      <div className={styles.content}>
        <p className={styles.timeStamp}>
          {variant === 'main' ? getFormattedDate(date) : getTime(date)}
          {variant === 'main' && isToday && ' (Today)'}
        </p>
        <div className={styles.weather}>
          {WeatherIcon && <WeatherIcon className={styles.icon}/>}
          <p>{temperature} C°</p>
        </div>
      </div>
      {isActive && (
        // render all hourly forcasts if active date
        hours.map((time, index) => {
          return (
            <WeatherListItem 
              key={index} 
              date={time.validTime} 
              params={time.parameters}
              variant="sub"
            />
          )
        })
      )}
      {onClick && (
        <button 
          className="sr-only" 
          ref={ref} 
          onClick={() => onClick(getDate(date))}>
            {isActive ? 'Close' : 'Open'}
        </button>
      )}
    </div>
  )
}
