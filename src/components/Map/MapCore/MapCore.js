/* Externals */
import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment';
import {GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";

/* Internals */
import styles from './MapCore.scss'

const MapCore = (props) => {

  function renderMarkers(markers) {
    return markers.map((marker, idx) => (
      <Marker
        {...marker}
        onLeftClick={(elem)=>{console.log(1, elem)}}
        onRightClick={(elem) => {console.log(2, elem)}}
      />
    ))
  }

  return (
    <GoogleMap
      ref={(elem) => {}}
      defaultZoom={15}
      disableDefaultUI={true}
      defaultCenter={{ lat: 37.5836026, lng: 127.0294043 }}>

      {renderMarkers(props.markers)}

    </GoogleMap>
  )

}

export default MapCore
