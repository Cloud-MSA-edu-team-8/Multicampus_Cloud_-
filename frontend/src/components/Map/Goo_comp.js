/*global google*/
import React, { Component } from 'react';
var API_KEY = require('./key.json');
API_KEY = API_KEY['google_maps_key_zzid'];

var center = {
    lat: 37.55,
    lng: 127
};
export default class Goo_comp extends Component{
    getGoogleMaps() {
        // If we haven't already defined the promise, define it
        if (!this.googleMapsPromise) {
          this.googleMapsPromise = new Promise((resolve) => {
            // Add a global handler for when the API finishes loading
            window.resolveGoogleMapsPromise = () => {
              // Resolve the promise
              resolve(google);
    
              // Tidy up
              delete window.resolveGoogleMapsPromise;
            };
    
            // Load the Google Maps API
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=resolveGoogleMapsPromise`;
            script.async = true;
            script.defer = true;
            document.head.appendChild(script);
          });
        }
    
        // Return a promise for the Google Maps API
        return this.googleMapsPromise;
      }
    
      componentWillMount() {
        // Start Google Maps API loading since we know we'll soon need it
        this.getGoogleMaps();
      }
    
      componentDidMount() {
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
        // Once the Google Maps API has finished loading, initialize the map
        this.getGoogleMaps().then((google) => {
          const map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: center,
            styles: mapStyle,
          });
        //   const marker = new google.maps.Marker({
        //     position: center,
        //     map: map
        //   });
        const polygon_style ={
            fillColor : '#eb345f',
            strokeWeight: 1,
            strokeOpacity: 0.5,
            strokeColor: 'adaaab',
            clickable : true,
            title :'test',
        }
        map.data.setStyle(polygon_style)

        // load KOREA outline polygons from a GeoJson file
        // map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/states.js', { idPropertyName: 'STATE' });
        map.data.loadGeoJson('https://raw.githubusercontent.com/southkorea/seoul-maps/master/kostat/2013/json/seoul_municipalities_geo.json',{idPropertyName:'name'});

        // wait for the request to complete by listening for the first feature to be
        // added
        google.maps.event.addListenerOnce(map.data, 'addfeature', function() {
        google.maps.event.trigger(document.getElementById('census-variable'),
            'change');
        });
        // var bounds = new google.maps.LatLngBounds();
        // center = bounds.getCenter();
        // map.setCenter(center);
        });
      }
    
      render() {
        return (
          <div>
            <div id="map" style={{width: '70vw', height: '70vh',margin :'auto auto'}}></div>
          </div>
        )
      }



    // state = {
    //     mapIsReady : false,
    // }

    // componentDidMount(){
    //     // const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY
    //     const script = document.createElement("script");
    //     script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`
    //     script.async = true;
    //     script.defer = true;
    //     script.addEventListener('load', ()=>{
    //         this.setState({mapIsReady:true})
    //     })
    //     document.body.appendChild(script);
    //     // script.onload = () =>{
    //     //     google.maps.load(()=>{
    //     //         var map = new google.maps.Map(document.getElementById('map'), {
    //     //             center: {lat: 40, lng: -100},
    //     //             zoom: 4,
    //     //             styles: mapStyle
    //     //             });
    //     //         // const map = new window.google.maps.Map(container, options);
    //     //     })
    //     // }        
    // }
    // componentDidUpdate(){
    //     if(this.state.mapIsReady){

    //         this.map = new window.google.maps.Map(document.getElementById('map'),{
    //             center : {lat: 37.3, lng: 127},
    //             zoom : 13,
    //             mapTypeId: 'roadmap',
    //         });
    //         console.log(this.map)
    //         // can add mark or something
    //     }
    // }
    // render(){
    //     return (
    //         <div id="map"/>
    //         // <div className={st.conta} id="map"></div>
    //     )
    // }
}