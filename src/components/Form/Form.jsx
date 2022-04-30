import React, { useEffect, useState } from 'react'
import { validateLon, validateLat } from '../../utils/validate'

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
    <div>
      <form>
        <label>Latitude
          <input 
            value={userInput.latitude}
            name="latitude"
            onChange={handleInputChange}
          />
        </label>
        <label>Longitude
          <input 
            value={userInput.longitude}
            name="longitude"
            onChange={handleInputChange}
          />
        </label>
        <button
          onClick={handleSubmit}
          disabled={!isValidForm}
        >
          Get weather
        </button>
      </form>
    </div>
  )
}
