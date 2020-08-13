import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import styles from './MapDraw.module.css'

const MapDraw = () => {
  const position = [37.49, 127.00]
  return(
    <div className={styles.container}>
    <Map center={position} zoom={12} style={{height : '50vh', width : '70vw', margin : 'auto auto' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
    </div>
  )
}

export default MapDraw;