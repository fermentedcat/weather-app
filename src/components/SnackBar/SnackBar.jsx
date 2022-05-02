import React from 'react'
import useSnackBars from '../../utils/useSnackBars'
import { Button } from '../Button/Button'
import styles from './SnackBar.module.scss'

export const SnackBar = ({ message, severity = "info", index }) => {
  const { removeAlert } = useSnackBars()

  function handleDismissSnack() {
    removeAlert(index)
  }

  return (
    <div className={`${styles.snack} ${styles[severity]}`}>
      <p className={styles.message}>{message}</p>
      <Button 
        size="small"
        variant="icon"
        onClick={handleDismissSnack}
      >
        &#215;
      </Button>
    </div>
  )
}
