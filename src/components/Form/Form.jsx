import React, { useState } from 'react'

export const Form = () => {
  const [userInput, setUserInput] = useState({
    longitude: '',
    latitude: ''
  })

  function handleInputChange(e) {
    setUserInput((prevInput) => { 
      return {...prevInput, 
        [e.target.name]: e.target.value
      }})
  }

  function handleSubmit(e) {
    e.preventDefault()
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
        >
          Get weather
        </button>
      </form>
    </div>
  )
}
