import { createContext, useCallback, useEffect, useState } from 'react'

const AUTO_HIDE_DURATION = 4000

export const SnackBarContext = createContext()

export const SnackBarProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([])

  useEffect(() => {
    if (alerts.length > 0) {
      // dismiss alerts one by one if any, oldest to newest
      const timer = setTimeout(() => {
        const tempAlerts = [...alerts]
        tempAlerts.pop()
        setAlerts(tempAlerts)
      }, AUTO_HIDE_DURATION)
      return () => clearTimeout(timer)
    }
  }, [alerts])

  const addAlert = useCallback((newAlert) => {
    // save new item first in array
    setAlerts((alerts) => [newAlert, ...alerts])
  }, [])

  const removeAlert = useCallback((index) => {
    setAlerts((alerts) => {
      // remove dismissed index from alert array
      const tempAlerts = [...alerts]
      tempAlerts.splice(index, 1)
      return tempAlerts
    })
  }, [])

  const value = { alerts, addAlert, removeAlert }

  return (
    <SnackBarContext.Provider value={value}>
      {children}
    </SnackBarContext.Provider>
  )
}
