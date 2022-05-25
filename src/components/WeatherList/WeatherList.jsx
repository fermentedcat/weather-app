import React, { useState } from 'react'
import { checkIsNoon, checkIsPM, getDate } from '../../utils/date'
import { WeatherListItem } from '../WeatherListItem/WeatherListItem'
import _ from 'lodash'

export const WeatherList = ({ weatherData }) => {
  const [activeDay, setActiveDay] = useState('')
  const days = _.groupBy(weatherData.timeSeries, (time) => getDate(time.validTime))

  function handleClickOnDate(date) {
    if (activeDay === date) {
      setActiveDay('')
      return
    }
    setActiveDay(date)
  }

  return (
    <div>
      {days && Object.values(days).map((day) => {
        const firstItemIsPM = checkIsPM(day[0].validTime)
        return (day.map((time, index) => {
          const isActive = getDate(time.validTime) === activeDay
          // display only noon reports, or first hour of first day if without noon (today)
          const shouldShow = checkIsNoon(time.validTime) || (firstItemIsPM && index === 0)
          return shouldShow && (
            <WeatherListItem 
              key={index} 
              date={time.validTime} 
              params={time.parameters} 
              hours={day}
              variant="main"
              isActive={isActive}
              onClick={handleClickOnDate}
            />
          )
        }))
      })}
    </div>
  )
}
