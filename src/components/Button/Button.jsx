import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ title, disabled, onClick }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  )
}
