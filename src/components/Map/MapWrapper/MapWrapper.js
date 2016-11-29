/* Externals */
import React from 'react'

/* Internals */
import styles from './MapWrapper.scss'

const MapWrapper = (props = {}) => {
  return (
    <div
      {...props.containerElementProps}
      className={styles.wrapper}>
    </div>
  )
}

export default MapWrapper
