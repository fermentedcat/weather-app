import React from 'react'
import { getDate, getTime } from '../../utils/date'
import { getTemp, getSymbolUnicode } from '../../utils/weather'

export const WeatherListItem = ({ date, params, variant, forecasts, isActive, onClick }) => {
  const temperature = getTemp(params)
  const wsymb = getSymbolUnicode(params)
  const isMain = variant === 'main'
  
  return (
    <div>
      <p>{isMain ? getDate(date) : getTime(date)} {temperature} {wsymb}</p>
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
      {onClick && <button onClick={() => onClick(getDate(date))}>{isActive ? 'Close' : 'Open'}</button>}
    </div>
  )
}
