import React from 'react'
import { getDate } from '../../utils/date'

export const WeatherListItem = ({ date, params, /*, isActive */ }) => {
  const temperature = params.filter((param) => param.name === 't')[0].values[0]
  const wsymb = params.filter((param) => param.name === 'Wsymb2')[0].values[0]
  
  return (
    <div>
      <p>{getDate(date)} {temperature} symbol: {wsymb}</p>
    </div>
  )
}
