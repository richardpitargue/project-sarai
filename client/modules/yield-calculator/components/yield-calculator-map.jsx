import React from 'react';
import L from 'leaflet';

class YieldCalculator extends React.Component {
  constructor() {
    super();
    this.calculateYield = this.calculateYield.bind(this);
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    //Help modal
    const dialog = document.querySelector('#yc-help-modal');
    const showDialogButton = document.querySelector('#help-icon');
    if (! dialog.showModal) {
      dialogPolyfill.registerDialog(dialog);
    }
    showDialogButton.addEventListener('click', function() {
      dialog.showModal();
    });
    dialog.querySelector('.close').addEventListener('click', function() {
      dialog.close();
    });

    dialog.showModal();

    //Yield modal
    const yieldDialog = document.querySelector('#yc-yield-modal');
    const showYieldDialogButton = document.querySelector('#calculate-yield-button');
    if (! yieldDialog.showModal) {
      dialogPolyfill.registerDialog(yieldDialog);
    }
    // showYieldDialogButton.addEventListener('click', function() {
    //   yieldDialog.showModal();
    // });
    yieldDialog.querySelector('.close').addEventListener('click', function() {
      yieldDialog.close();
    });

    this.yieldDialog = yieldDialog;



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
    const {filteredLocations} = this.props

    // const location = document.getElementById('location').value
    const location = 'Cordon'

    const group = (filteredLocations.find((entry) => {
      return (entry.value == location) 
    })).group;

    const solarRadiation = document.getElementById('solar-radiation').value
    const plantingDate = document.getElementById('planting-date').value
    const maximumTemperature = document.getElementById('maximum-temperature').value
    const minimumTemperature = document.getElementById('minimum-temperature').value
    const precipitation = document.getElementById('precipitation').value
    const soilTexture = document.getElementById('soil-texture').value
    const elevation = document.getElementById('elevation').value

    const input = {
      "plantingDate": plantingDate,
      "solarRadiation": solarRadiation,
      "minimumTemperature": minimumTemperature,
      "maximumTemperature": maximumTemperature,
      "precipitation": precipitation,
      "soilTexture": soilTexture,
      "elevation": elevation
    }

    // const input = {
    //   "plantingDate": 24,
    //   "solarRadiation": 15,
    //   "minimumTemperature": 24,
    //   "maximumTemperature": 32,
    //   "precipitation": 2,
    //   "soilTexture": 4,
    //   "elevation": 80
    // }

    const {
      calculateGroupA,
      calculateGroupB,
      calculateGroupC,
      calculateGroupD,
      calculateGroupE,
      calculateGroupF,
      calculateGroupG
    } = this.props;

    let result = 0

    switch (group) {
      case 'A':
        result = calculateGroupA(input);
        break;
      case 'B':
        result = calculateGroupB(input);
        break;
      case 'C':
        result = calculateGroupC(input);
        break;
      case 'D':
        result = calculateGroupD(input);
        break;
      case 'E':
        result = calculateGroupE(input);
        break;
      case 'F':
        result = calculateGroupF(input);
        break;
      case 'G':
        result = calculateGroupG(input);
        break;
    }

    console.log(`Yield: ${result}`)
    Session.set('yield', result)

    this.yieldDialog.showModal()
  }
renderSelectOptions(data) {
    return data.map((option, key) => {
      return (
        <option value={option.value} key={key}>{option.text}</option>
      )
    })
  }

  renderForm() {
    const {
      filteredLocations,
      plantingDateOptions,
      soilTextures} 
      = this.props;

    return (
      <div id="yield-calculator-sidebar">
        <div className="mdl-grid">
          <div className="mdl-cell mdl-cell--12-col yc-top-row">
            <a href="#" className="yc-help-icon"><i id="help-icon" className="help-options material-icons">help</i></a>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-dropdown">
              <select className="yc-dropdown__select" id="location" defaultValue="0">
                <option value="0" className="no-display">Select Location</option>
                {this.renderSelectOptions(filteredLocations)}
              </select>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-dropdown">
              <select className="yc-dropdown__select" id="planting-date" defaultValue="0">
                <option value="0" className="no-display">Select Planting Date</option>
                {this.renderSelectOptions(plantingDateOptions.data)}
              </select>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-input yc-input-srad">
              <input type="number" className="yc-input__number" id="solar-radiation" placeholder="Solar Radation"/>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-input yc-input-temp">
              <input type="number" className="yc-input__number" id="minimum-temperature" placeholder="Minimum Temperature" />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-input yc-input-temp">
              <input type="number" className="yc-input__number" id="maximum-temperature" placeholder="Maximum Temperature" />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-input yc-input-rain">
              <input type="number" className="yc-input__number yc-input__number-rain" id="precipitation" placeholder="Precipitation" />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">

            <div className="yc-dropdown">
              <select id="soil-texture" className="yc-dropdown__select" defaultValue="0">
                <option value="0" className="no-display">Select Soil Type</option>
                {this.renderSelectOptions(soilTextures.data)}
              </select>
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col yc-input-row">
            <div className="yc-input yc-input-elev">
              <input type="number" className="yc-input__number" id="elevation" placeholder="Elevation" />
            </div>
          </div>

          <div className="mdl-cell mdl-cell--12-col">
            <button id="calculate-yield-button" className="mdl-button mdl-js-button mdl-button--raised" onClick={this.calculateYield}>
              Submit
            </button>
          </div>

        </div>
      </div>
    )
  }

  renderHelpDialog() {
    return (
      <dialog id="yc-help-modal" className="mdl-dialog">
        <div className="mdl-dialog__content">
          <p>Use the Project SARAI <b>yield calculator</b> to assist you in your farming plan. Our yield calculator can help you to estimate your crop yield (kg/ha), guide your decisions on getting a crop insurance, plan your harvest and storage requirements, and budget your resources.</p>
        </div>
        <div className="mdl-dialog__actions">
          <button type="button" className="mdl-button close">OK</button>
        </div>
      </dialog>
    )
  }

  renderYieldDialog() {
    return (
      <dialog id="yc-yield-modal" className="mdl-dialog">
        <div className="mdl-dialog__content">
          <p>You can get {Session.get('yield')} kg per hectare.</p>
        </div>
        <div className="mdl-dialog__actions">
          <button type="button" className="mdl-button close">OK</button>
        </div>
      </dialog>
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
        {this.renderHelpDialog()}
        {this.renderYieldDialog()}
      </div>
      
    )
  }

}

export default YieldCalculator;