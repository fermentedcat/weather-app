import React from 'react'
import styles from './Button.module.scss'

export const Button = ({ 
  title, 
  size = 'medium', 
  variant = 'primary', 
  disabled, 
  onClick,
  children
}) => {
  return (
    <button
      className={`${styles.button} ${styles[size]} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title && title}
      {children}
    </button>
  )
}
