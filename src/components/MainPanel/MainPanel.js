/* External Dependencies */
import React from 'react'
import classNames from 'classnames'
import { withRouter } from 'react-router'

/* Internal Dependencies */
import styles from './MainPanel.scss'

const MainPanel = (props) => {
  console.log(1, props)
  return (
    <div className={classNames(styles.wrapper, props.className)}>
      <div className={styles.header}>
         <span>
           {props.header}
         </span>
      </div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}

const RoutedMainPanel = withRouter(MainPanel)

export default RoutedMainPanel
