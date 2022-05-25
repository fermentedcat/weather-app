import React from 'react'

import { getTime } from '../../utils/date'
import { WeatherItemDetails } from '../WeatherItemDetails/WeatherItemDetails'
import styles from './WeatherListSubItem.module.scss'


export const WeatherListSubItem = ({ date, params }) => {
  const timeStamp = getTime(date)
  return (
    <li className={styles.wrapper}>
        <WeatherItemDetails variant="sub" {...{ timeStamp, date, params }}/>
    </li>
  )
}
