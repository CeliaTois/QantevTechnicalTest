import React from 'react';
import L from 'leaflet';

class Map extends React.Component {

  componentDidMount() {
    // create map
    this.map = L.map('map', {
      center: [1.34693, 103.85107],
      zoom: 12,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        }),
        L.marker([1.3127619, 103.8545562]).bindPopup("<p id='popup'>Agewell Seniors Clinic, Agewell Artsz Medical Group Pte Ltd</p>1 Farrer Park Station Rd, Singapore 217562")
      ]
    });
  }

  render() {
    return <div id="map"></div>
  }
}

export default Map;
