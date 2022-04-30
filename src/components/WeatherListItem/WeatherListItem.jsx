import React from 'react'
import { getTime } from '../../utils/date'
import { getTemp, getSymbol } from '../../utils/weather'

export const WeatherListItem = ({ date, params, forecasts, isActive, onClick }) => {
  const temperature = getTemp(params)
  const wsymb = getSymbol(params)
  return (
    <div>
      <p>{date} {temperature} symbol: {wsymb}</p>
      {isActive && (
        forecasts.map((time) => {
          return <p>{getTime(time.validTime)} {getTemp(time.parameters)} {getSymbol(time.parameters)}</p>
        })
      )}
      <button onClick={() => onClick(date)}>{isActive ? 'Close' : 'Open'}</button>
    </div>
  )
}
