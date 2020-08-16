import React from 'react'
import { Map, Marker, Popup, TileLayer, Polygon,GeoJSON } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './MapDraw.module.css'

// const c_key = require('./key.json')
// c_key = c_key['carto_key']

// const client = new carto.Client({
//   apiKey: c_key,
//   username: 'zzid'
// })
// const geo = require('https://raw.githubusercontent.com/southkorea/seoul-maps/master/kostat/2013/json/seoul_municipalities_geo.json')

const MapDraw = () => {
  const position = [37.49, 127.00]
  return(
    <div className={styles.container}>
    <Map center={position} zoom={12} style={{height : '50vh', width : '70vw', margin : 'auto auto' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        {/* {poly_layer.map((cor)=><Polygon color='purple' positions={cor}/>)} */}\
        {/* <GeoJSON data={geo}/> */}
      </Map>
    </div>
  )
}

export default MapDraw;