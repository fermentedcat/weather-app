import React, { useEffect, useState } from 'react'
import { checkIsNoon, getDate } from '../../utils/date'

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
          return checkIsNoon(time.validTime) && <p key={index}>{time.validTime}</p>
        }))
      })}
      <p>
        Man ser en list-vy där varje element i listan innehåller datum, temperatur och evt. en väder-symbol. Det är temperatur och väder-symbol för kl. 12 som visas (api't returnerar väderprognos för dygnets alla timmar).
      </p>
      <p>
      Api´t returnerar en array med elements för varje timme för ca. 10 dagar framåt. Varje element innehåller temperatur och kod för väder-symbol (vädersymbol-fältet heter wsymb2).
      </p>
    </div>
  )
}