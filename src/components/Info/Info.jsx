import React, { useRef, useState } from 'react'
import { FiInfo } from 'react-icons/fi'
import styles from './Info.module.scss'

export const Info = () => {
  const [showInfo, setShowInfo] = useState(false)
  const ref = useRef()

  function handleClick() {
    ref.current.click()
  }
  
  function handleToggleInfo() {
    setShowInfo(!showInfo)
  }

  return (
    <>
      <div 
        onClick={handleClick} 
        className={`${styles.backdrop} ${showInfo && styles.open}`}
      ></div>
      <div onClick={handleClick} >
        <div className={`${styles.infoIcon} ${showInfo && styles.active}`}>
          <button 
            className="sr-only" 
            ref={ref}
            onClick={handleToggleInfo}  
          >
              {showInfo ? 'Hide' : 'Show'} info about valid coordinates
          </button>
          <FiInfo />
        </div>
        {showInfo && (
          <div className={styles.infoCardWrapper}>
            <div className={styles.infoCard}>
              <table>
              <caption>Corner points</caption>
                <thead>
                  <tr>
                    <th>Direction</th>
                    <th>Longitude</th>
                    <th>Latidude</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>SW</th>
                    <td>2.250475</td>
                    <td>52.500440</td>
                  </tr>
                  <tr>
                    <th>SE</th>
                    <td>27.348870</td>
                    <td>52.547483</td>
                  </tr>
                  <tr>
                    <th>NE</th>
                    <td>37.848053</td>
                    <td>70.740996</td>
                  </tr>
                  <tr>
                    <th>NW</th>
                    <td>-8.541278</td>
                    <td>70.655722</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
