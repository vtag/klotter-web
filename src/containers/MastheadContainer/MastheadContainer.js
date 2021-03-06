/* External Dependencies */
import React from 'react'

/* Internal Dependencies */
import styles from './MastheadContainer.scss'

const MastheadContainer = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.geoLocation}>
        <span>
          Anam Station
        </span>
      </div>
      <div className={styles.logo}>
        <span>
          Vtag
        </span>
      </div>
    </div>
  )
}

export default MastheadContainer
