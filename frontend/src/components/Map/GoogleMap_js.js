// import React, { createRef } from 'react';

// // var map;
// // var censusMin = Number.MAX_VALUE, censusMax = -Number.MAX_VALUE;
// // var url ='https://storage.googleapis.com/mapsdevsite/json/DP02_0066PE';
// var g_key = './key.json';
// g_key = g_key['google_maps_key_zzid'];
// const GoogleMap_js = () =>{
//     googleMapRef = createRef()
    
//     var prop = {src : `https://maps.googleapis.com/maps/api/js?key=${g_key}&libraries=places`}
//     const googleMapScript = React.createElement('script',prop);
//     window.document.body.appendChild(googleScript)

//     googleScript.addEventListener('load', {
//         googleMap : this.createGoogleMap()
//     })
    
//     createGoogleMap = () =>
//         new window.google.maps.Map(this.googleMapRef.current, {
//             zoom: 16,
//             center: {
//                 lat: 43.642567,
//                 lng: -79.387054,
//             },
//             disableDefaultUI: true,
//         })
    
//     createMarker = () =>
//         new window.google.maps.Marker({
//             position: { lat: 43.642567, lng: -79.387054 },
//             map: this.googleMap,
//         })
//     return (
//         <div
//             id="google-map"
//             ref={this.googleMapRef}
//             style={{width:'70vw', height:'50vh'}}
//         />
//     )
// //     function initMap() {

// //         // load the map
// //         map = new google.maps.Map(document.getElementById('map'), {
// //             center: {lat: 40, lng: -100},
// //             zoom: 4,
// //             styles: mapStyle
// //         });


// //         // set up the style rules and events for google.maps.Data
// //         map.data.setStyle(styleFeature);
// //         // map.data.addListener('mouseover', mouseInToRegion);
// //         // map.data.addListener('mouseout', mouseOutOfRegion);

// //         // wire up the button
// //         var selectBox = document.getElementById('census-variable');
// //         google.maps.event.addDomListener(selectBox, 'change', function() {
// //             clearCensusData();
// //             loadCensusData(selectBox.options[selectBox.selectedIndex].value);
// //         });

// //         // state polygons only need to be loaded once, do them now
// //         loadMapShapes();

// //     }

// //         /** Loads the state boundary polygons from a GeoJSON source. */
// //     function loadMapShapes() {
// //         // load US state outline polygons from a GeoJson file
// //         map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/states.js', { idPropertyName: 'STATE' });

// //         // wait for the request to complete by listening for the first feature to be
// //         // added
// //         google.maps.event.addListenerOnce(map.data, 'addfeature', function() {
// //             google.maps.event.trigger(document.getElementById('census-variable'),
// //                 'change');
// //         });
// //         }

// //         /**
// //          * Loads the census data from a simulated API call to the US Census API.
// //          *
// //          * @param {string} variable
// //          */
// //         function loadCensusData(variable) {
// //         // load the requested variable from the census API (using local copies)
// //         var xhr = new XMLHttpRequest();
// //         xhr.open('GET', variable + '.json');
// //         xhr.onload = function() {
// //             var censusData = JSON.parse(xhr.responseText);
// //             censusData.shift(); // the first row contains column names
// //             censusData.forEach(function(row) {
// //             var censusVariable = parseFloat(row[0]);
// //             var stateId = row[1];

// //             // keep track of min and max values
// //             if (censusVariable < censusMin) {
// //                 censusMin = censusVariable;
// //             }
// //             if (censusVariable > censusMax) {
// //                 censusMax = censusVariable;
// //             }

// //             // update the existing row with the new data
// //             map.data
// //                 .getFeatureById(stateId)
// //                 .setProperty('census_variable', censusVariable);
// //             });

// //             // update and display the legend
// //             document.getElementById('census-min').textContent =
// //                 censusMin.toLocaleString();
// //             document.getElementById('census-max').textContent =
// //                 censusMax.toLocaleString();
// //         };
// //         xhr.send();
// //         }

// //     /** Removes census data from each shape on the map and resets the UI. */
// //     function clearCensusData() {
// //         censusMin = Number.MAX_VALUE;
// //         censusMax = -Number.MAX_VALUE;
// //         map.data.forEach(function(row) {
// //             row.setProperty('census_variable', undefined);
// //         });
// //         document.getElementById('data-box').style.display = 'none';
// //         document.getElementById('data-caret').style.display = 'none';
// //         }

// //         /**
// //          * Applies a gradient style based on the 'census_variable' column.
// //          * This is the callback passed to data.setStyle() and is called for each row in
// //          * the data set.  Check out the docs for Data.StylingFunction.
// //          *
// //          * @param {google.maps.Data.Feature} feature
// //          */
// //         function styleFeature(feature) {
// //         var low = [5, 69, 54];  // color of smallest datum
// //         var high = [151, 83, 34];   // color of largest datum

// //         // delta represents where the value sits between the min and max
// //         var delta = (feature.getProperty('census_variable') - censusMin) /
// //             (censusMax - censusMin);

// //         var color = [];
// //         for (var i = 0; i < 3; i++) {
// //             // calculate an integer color based on the delta
// //             color[i] = (high[i] - low[i]) * delta + low[i];
// //         }

// //         // determine whether to show this shape or not
// //         var showRow = true;
// //         if (feature.getProperty('census_variable') == null ||
// //             isNaN(feature.getProperty('census_variable'))) {
// //             showRow = false;
// //         }

// //         var outlineWeight = 0.5, zIndex = 1;
// //         if (feature.getProperty('state') === 'hover') {
// //             outlineWeight = zIndex = 2;
// //         }

// //         return {
// //             strokeWeight: outlineWeight,
// //             strokeColor: '#fff',
// //             zIndex: zIndex,
// //             fillColor: 'hsl(' + color[0] + ',' + color[1] + '%,' + color[2] + '%)',
// //             fillOpacity: 0.75,
// //             visible: showRow
// //         };
// //     }
// //     return(
// //         <div id='map'></div>
// //     )
// }
// export default GoogleMap_js;
