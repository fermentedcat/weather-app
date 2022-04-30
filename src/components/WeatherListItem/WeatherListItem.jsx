import React from 'react'
import { getTime } from '../../utils/date'
import { getTemp, getSymbol } from '../../utils/weather'

export const WeatherListItem = ({ date, params, variant, forecasts, isActive, onClick }) => {
  const temperature = getTemp(params)
  const wsymb = getSymbol(params)
  
  return (
    <div>
      <p>{date} {temperature} symbol: {wsymb}</p>
      {isActive && (
        forecasts.map((time, index) => {
          return (
            <WeatherListItem 
              key={index} 
              date={getTime(time.validTime)} 
              params={time.parameters}
              variant="sub"
            />
          )
        })
      )}
      {onClick && <button onClick={() => onClick(date)}>{isActive ? 'Close' : 'Open'}</button>}
    </div>
  )
}
