import React, { useEffect, useState } from 'react'
import { checkIsNoon, getDate } from '../../utils/date'
import { WeatherListItem } from '../WeatherListItem/WeatherListItem'

export const WeatherList = ({ weatherData }) => {
  const [days, setDays] = useState()
  // const [activeDay, setActiveDay] = useState('')

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

  return (
    <div>
      {days && Object.values(days).map((day) => {
        return (day.map((time, index) => {
          return checkIsNoon(time.validTime) && (
            <WeatherListItem 
              key={index} 
              date={time.validTime} 
              params={time.parameters} 
            />
          )
        }))
      })}
    </div>
  )
}
