import React, { useEffect, useState } from 'react'
import { validateLon, validateLat } from '../../utils/validate'
import { Button } from '../Button/Button'
import { Input } from '../Input/Input'
import styles from './Form.module.scss'

export const Form = ({ onSubmit }) => {
  const [userInput, setUserInput] = useState({
    longitude: '',
    latitude: ''
  })
  const [isValidInput, setIsValidInput] = useState({
    longitude: false,
    latitude: false
  })
  const [isValidForm, setIsValidForm] = useState(false)

  useEffect(() => {
    // validate input on change
    const isValid = validateLon(userInput.longitude)
    setIsValidInput((prevState) => {
      return {...prevState,
        longitude: isValid
      }})
    }, [userInput.longitude])
    
  useEffect(() => {
    const isValid = validateLat(userInput.latitude)
    setIsValidInput((prevState) => {
      return {...prevState,
        latitude: isValid
      }})
  }, [userInput.latitude])
    
  useEffect(() => {
    // validate form on input validation change
    setIsValidForm(isValidInput.longitude && isValidInput.latitude)
  }, [isValidInput])

  function handleInputChange(e) {
    // update state with input name: value
    setUserInput((prevInput) => { 
      return {...prevInput, 
        [e.target.name]: e.target.value
      }})
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit(userInput)
  }

  return (
      <form className={styles.wrapper}>
        <Input 
          title="Longitude"
          name="longitude"
          value={userInput.longitude}
          placeholder="13.819552"
          onChange={handleInputChange}
        />
        <Input 
          title="Latitude"
          name="latitude"
          value={userInput.latitude}
          placeholder="55.433993"
          onChange={handleInputChange}
        />
        <Button 
          title="Get weather" 
          disabled={!isValidForm} 
          onClick={handleSubmit}
        />
      </form>
  )
}
