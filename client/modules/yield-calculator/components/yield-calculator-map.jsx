import React from 'react';
import L from 'leaflet';

class YieldCalculator extends React.Component {
  constructor() {
    super();
    this.calculateYield = this.calculateYield.bind(this);
    this.groupA = this.groupA.bind(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

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

  calculateYield() {
    this.location = document.getElementById('location').value
    this.solarRadiation = document.getElementById('solar-radiation').value
    this.plantingDate = document.getElementById('planting-date').value
    this.maximumTemperature = document.getElementById('maximum-temperature').value
    this.minimumTemperature = document.getElementById('minimum-temperature').value
    this.precipitation = document.getElementById('precipitation').value
    this.soilTexture = document.getElementById('soil-texture').value
    this.elevation = document.getElementById('elevation').value


    switch (this.locationGroup) {
      case 'A':
        groupA();
        break;
      case 'B':
        break;
      case 'C':
        break;
      case 'D':
        break;
      case 'E':
        break;
      case 'F':
        break;
      case 'G':
        break;
    }
  }

  groupA() {
    const {calculateGroupA} = this.props;
  }

  renderLocationSelect() {

  }

  renderPlantingDateOptions() {
    const {plantingDateOptions} = this.props;

    return plantingDateOptions.options.map((option, key) => {

      return (
        <option value={option.weekNumber} key={key}>{option.week}</option>
      )
    })
  }

  renderForm() {
    return (
      <div id="yield-calculator-sidebar">
        <div className="mdl-grid">

            <div className="mdl-cell mdl-cell--6-col">
              Location:
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <select>
                <option>Cordon</option>
              </select>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Planting Date:
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <select>
                {this.renderPlantingDateOptions()}
              </select>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Solar Radiation: <sup></sup>
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <input type="number" className="custom-input" id="srad"/>MJ / m<sup>2</sup>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Maximum Temperature:
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <input type="number" className="custom-input" />
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Minimum Temperature: 
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
              <select>
                <option value="1">Sand</option>
                <option value="2">Sandy Loam</option>
                <option value="3">Silty Clay</option>
                <option value="4">Clay</option>
                <option value="5">Loam</option>
                <option value="6">Clay Loam</option>
              </select>
            </div>

            <div className="mdl-cell mdl-cell--6-col">
              Elevation
            </div>
            <div className="mdl-cell mdl-cell--6-col">
              <input type="number" className="custom-input" />
            </div>

            <div className="mdl-cell mdl-cell--12-col">
              <button className="mdl-button mdl-js-button mdl-button--raised" onClick={this.calculateYield}>
                Submit
              </button>
            </div>

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
        {this.renderForm()}
      </div>
      
    )
  }

}

export default YieldCalculator;