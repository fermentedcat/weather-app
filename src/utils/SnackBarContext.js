import { createContext, useCallback, useEffect, useState } from 'react'

const AUTO_HIDE_DURATION = 4000

export const SnackBarContext = createContext()

export function SnackBarProvider({ children }) {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    if (messages.length > 0) {
      // dismiss messages one by one if any, oldest to newest
      const timer = setTimeout(() => {
        const tempMessages = [...messages]
        tempMessages.pop()
        setMessages(tempMessages)
      }, AUTO_HIDE_DURATION)
      return () => clearTimeout(timer)
    }
  }, [messages])

  // memoize add message function
  const addMessage = useCallback((content) => {
    setMessages((messages) => [content, ...messages])
  }, [])

  const value = { messages, addMessage }
    
  return (
    <SnackBarContext.Provider value={value}>
      {children}
    </SnackBarContext.Provider>
  )
}