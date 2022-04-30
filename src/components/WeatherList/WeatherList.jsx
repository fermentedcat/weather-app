import React, { useEffect, useState } from 'react'
import { checkIsNoon, getDate } from '../../utils/date'
import { WeatherListItem } from '../WeatherListItem/WeatherListItem'

export const WeatherList = ({ weatherData }) => {
  const [days, setDays] = useState()
  const [activeDay, setActiveDay] = useState('')

  useEffect(() => {
    const daysObj = {}
    // group time objects by date
    weatherData.timeSeries.forEach((time) => {
      const date = getDate(time.validTime)
      // add date array if nonexistent
      daysObj[date] = daysObj[date] || []
      daysObj[date].push(time)
    })
    setDays(daysObj)
    
  }, [weatherData])

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
        return (day.map((time, index) => {
          const date = getDate(time.validTime)
          return checkIsNoon(time.validTime) && (
            <WeatherListItem 
              key={index} 
              date={date} 
              variant="main"
              params={time.parameters} 
              forecasts={day}
              isActive={date === activeDay}
              onClick={handleClickOnDate}
            />
          )
        }))
      })}
    </div>
  )
}
