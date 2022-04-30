import React, { useRef } from 'react'
import { getDate, getTime } from '../../utils/date'
import { getTemp, getSymbolUnicode } from '../../utils/weather'
import styles from './WeatherListItem.module.scss'

export const WeatherListItem = ({ date, params, variant, forecasts, isActive, onClick }) => {
  const temperature = getTemp(params)
  const wsymb = getSymbolUnicode(params)
  const ref = useRef()
  const isMain = variant === 'main'

  function handleClickOnItem() {
    ref.current.click()
  }
  
  return (
    <div className={`${styles.wrapper} ${styles[variant]}`} onClick={handleClickOnItem}>
      <div className={styles.content}>
        <p className={styles.timeStamp}>{isMain ? getDate(date) : getTime(date)}</p>
        <div>
          <p className={styles.icon}>{wsymb}</p>
          <p>{temperature} C°</p>
        </div>
      </div>
      {isActive && (
        forecasts.map((time, index) => {
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
