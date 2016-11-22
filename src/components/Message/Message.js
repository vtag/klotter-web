import React from 'react'
import { connect } from 'react-redux'

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

function haversineDistance(x1, y1, x2, y2) {
  var R = 6371; // average earth radius in kilometers

  var x1 = y2 - x2;
  var dLat = toRad(x1);
  var x2 = y1 - x1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(x2)) * Math.cos(toRad(y2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
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
          some time
        </span>
        <span>
          {haversineDistance(props.message.y, props.message.x, props.y, props.x).toFixed(0)} km away
        </span>
      </div>
    </div>
  )
}

export default Message
