import React from 'react'
import { connect } from 'react-redux'

/**/
import styles from './MainFrame.scss'
import Masthead from '../../containers/Masthead$'
import GlobalFooter from '../../containers/GlobalFooter$'

const MainFrame = (props) => {
  return (
    <div className={styles.wrapper}>
      <Masthead/>
      <div className={styles.body}>
        {props.children}
      </div>
      <GlobalFooter/>
    </div>
  )
}

export default MainFrame
