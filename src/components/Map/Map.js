/* Externals */
import React from 'react'
import {GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import MapCore from './MapCore'
import MapWrapper from './MapWrapper'

/* Internals */
import styles from './Map.scss'

/**
 * Format of the markers
 * 
 * const markers = [
     {
       position: {
         lat: 37.5851348,
         lng: 127.02879970000001,
       },
       key: `anam`,
       defaultAnimation: 2,
     },
     ...
 ]
 *
 */

const Map = (props) => {
  
  function convertMsgToMarkerObject(msgs) {
    let marker = {}
    return msgs.map(msg => {
      marker = {}
      marker.position = {}
      marker.position.lat = msg.y // opposite
      marker.position.lng = msg.x
      marker.key = msg.message
      marker.defaultAnimation = 2
      return marker
    })
  }

  return (
    <div className={styles.wrapper}>
      <GoogleMapLoader
        containerElement={ MapWrapper() }
        googleMapElement={ MapCore({markers: convertMsgToMarkerObject(props.messages)})}/>
    </div>
  )
}

export default Map
