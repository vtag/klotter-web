/* Externals */
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment';
import {GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { Link } from 'react-router'
import classNames from 'classnames'

/* Internals */
import styles from './DefaultFooter.scss'

const DefaultFooter = (props) => {

  return (
    <div className={styles.wrapper}>
      <div className={classNames(styles.msgBtn, {[styles.highlighted]: props.highlighted === 'messages'})}>
        <Link to='/messages'><i className="fa fa-commenting" aria-hidden="true"/></Link>
      </div>
      <div className={classNames(styles.mapBtn, {[styles.highlighted]: props.highlighted === 'map'})}>
        <Link to='/map'><i className="fa fa-street-view" aria-hidden="true"/></Link>
      </div>
    </div>
  )
}

export default DefaultFooter
