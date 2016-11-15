import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './MainFrame.scss'
import Masthead from '../../containers/Masthead$'

const MainFrame = (props) => {
  console.log(3, props.children)
  return (
    <div className={styles.wrapper}>
      <Masthead/>
      <div className={styles.body}>
        {props.children}
      </div>
    </div>
  )
}

export default MainFrame
