import React from 'react';
import L from 'leaflet';

class YieldCalculator extends React.Component {
  constructor() {
    super();
    this.groupA = this.groupA.bind(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    this.groupA(1, 2, 3, 4, 5, 6, 7)

    //Store all this data in db
    const northEast = L.latLng(21.924058, 115.342984);
    const southWest = L.latLng(4.566972, 128.614468);
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('yield-calculator-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      // attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      // maxZoom: 14,
      id: 'mcarandang.p67769a5',
      accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    }).addTo(map);

    const markerIcon = L.icon({
      iconUrl: '/images/weather-monitoring/map/marker.png',
      iconSize: [40, 40],
      iconAnchor: [20, 39],
      popupAnchor: [0, -40]
    });
  }

  groupA(plantingDate, solarRadiation, maxTemperature, minTemperature, precipitation, soilTexture, elevation) {
    const {calculateGroupA} = this.props;

    console.log(calculateGroupA(plantingDate, solarRadiation, maxTemperature, minTemperature, precipitation, soilTexture, elevation));
  }

  renderSidebar() {

    return (
      <div id="yield-calculator-sidebar">
        <div className="mdl-grid">

          <form action="#">
            <div className="mdl-cell mdl-cell--2-col">
              Location:
            </div>
            <div className="mdl-cell mdl-cell--2-col">
              <select>
                <option>Cordon</option>
              </select>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Planting Date:
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <select>
                <option>Week 1: Jan 1 - Jan 7</option>
              </select>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Solar Radiation: <sup></sup>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <input type="number" className="custom-input" />MJ / m<sup>2</sup>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Max Temp:
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <input type="number" className="custom-input" />
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Min Temp: 
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <input type="number" className="custom-input" />
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Precipitation
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <input type="number" className="custom-input" />
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Soil Texture 
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Elevation
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <input type="number" className="custom-input" />
            </div>

          </form>
        </div>
      </div>
    )
  }


  render() {
    mapStyle = {
      margin: '0px', 
      padding: '0px'
    }
    return (
      <div id="map-container">
        <div id="yield-calculator-map"></div>
        {this.renderSidebar()}
      </div>
      
    )
  }

}

export default YieldCalculator;