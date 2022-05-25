import React, { useRef } from 'react'
import { getDate, getFormattedDate } from '../../utils/date'
import { WeatherItemDetails } from '../WeatherItemDetails/WeatherItemDetails'
import { WeatherListSubItem } from '../WeatherListSubItem/WeatherListSubItem'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'
import styles from './WeatherListItem.module.scss'

export const WeatherListItem = ({ date, params, hours, isActive, onClick }) => {
  const ref = useRef()
  const timeStamp = getFormattedDate(date)
  
  function handleClickOnItem() {
    ref.current.click()
  }
  
  return (
    
    <li className={styles.wrapper} onClick={handleClickOnItem}>
      <div className={styles.content}>
        <WeatherItemDetails variant="main" {...{ timeStamp, date, params }}>
          <div className={styles.buttonWrapper}>
            <button 
              ref={ref} 
              className={styles.button} 
              onClick={() => onClick(getDate(date))}
            >
              <span className="sr-only">{isActive ? 'Close' : 'Open'}</span>
              {isActive 
                ? <FaChevronUp className={styles.icon}/>
                : <FaChevronDown className={styles.icon}/>
              }
            </button>
          </div>
        </WeatherItemDetails>
      </div>
      {isActive && (
        // render all hourly forcasts if active date
        <ul>
          {hours.map((time, index) => {
            return (
              <WeatherListSubItem 
                key={index} 
                date={time.validTime} 
                params={time.parameters}
              />
            )
          })}
        </ul>
      )}
    </li>
  )
}
