import React from 'react'
import { connect } from 'react-redux'
import moment from 'moment';

/**/
import styles from './Message.scss'

const messageColors = ['#ff6666', '#6d72c4', '#a37aa2', '#73886e', '#ef9820']

function getMessageStyle(id) {
  const color = messageColors[id % messageColors.length];
  return { backgroundColor: color }
}

function toRad(x) {
  return x * Math.PI / 180;
}

function haversineDistance(lat1, lon1, lat2, lon2) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var R = 6371; // average earth radius in kilometers

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  return d;
}

const Message = (props) => {
  return (
    <div
      className={styles.wrapper}
      style={getMessageStyle(props.message.id)}>
      <div className={styles.msgContent}>
        {props.message.message}
      </div>
      <div className={styles.meta}>
        <span className={styles.time}>
          {moment(props.message.created_at).fromNow()}
        </span>
        <span>
          {haversineDistance(props.x, props.y, props.message.x, props.message.y).toFixed(0)} km away
        </span>
      </div>
    </div>
  )
}

export default Message
