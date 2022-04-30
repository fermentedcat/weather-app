import React from 'react'
import styles from './Input.module.scss'

export const Input = ({ title, name, value, placeholder, onChange }) => {
  return (
    <>
      <label className={styles.label} for={name}>{title}:</label>
      <input 
        className={styles.input}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  )
}
