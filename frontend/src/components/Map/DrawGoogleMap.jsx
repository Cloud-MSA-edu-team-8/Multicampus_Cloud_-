// global google
import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '70vw',
  height: '50vh',
  margin: '0 auto'
};
const center = {
    lat: 37.49,
    lng: 127
};

const mapStyle = [{
    'stylers': [{'visibility': 'off'}]
  }, {
    'featureType': 'landscape',
    'elementType': 'geometry',
    'stylers': [{'visibility': 'on'}, {'color': '#fcfcfc'}]
  }, {
    'featureType': 'water',
    'elementType': 'geometry',
    'stylers': [{'visibility': 'on'}, {'color': '#bfd4ff'}]
  }];


var g_key = require('./key.json');
g_key = g_key['google_maps_key_zzid'];

var map_t;

const DrawGoogleMap = () =>{
  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    // const google = Window.google;
    // bounds.extend( new window.google.maps.LatLng(lat, lng) )
    map.fitBounds(bounds);
    setMap(map)
  }, [])
 
  const onUnmount = React.useCallback(function callback(map) {
    console.log('error')
    setMap(null)
  }, [])

  const gogleMap = (
    <GoogleMap
        options={{
            styles: mapStyle,
        }}
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
    </GoogleMap>
    );

  return (
    <LoadScript googleMapsApiKey= {g_key}>
      <GoogleMap
        // options={{styles : mapStyle}}
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
      >
      </GoogleMap>
      {/* <div>{gogleMap}</div> */}
    </LoadScript>
  )
}
 
export default DrawGoogleMap;