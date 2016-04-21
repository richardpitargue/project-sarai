import React from 'react';
import L from 'leaflet';

import RainChartWithForecast from './rain-chart-with-forecast.jsx';

class DSSMapChart extends React.Component {
  constructor() {
    super()
    Session.set('weatherFetched', 'false');
  }

  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    Session.set('drawerVisibility', 'false');

    const {stations} = this.props;

    // //Store all this data in db
    // const northEast = L.latLng(21.924058, 115.342984);
    // const southWest = L.latLng(4.566972, 128.614468);
    // const bounds = L.latLngBounds(southWest, northEast);

    // const map = L.map('dss-map', {
    //   maxBounds: bounds,
    //   center: [14.154604, 121.247505],
    //   zoom: 8,
    //   minZoom: 7
    // });

    // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
    //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    //   // maxZoom: 14,
    //   id: 'mcarandang.p67769a5',
    //   accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    // }).addTo(map);

    // const markerIcon = L.icon({
    //   iconUrl: '/images/weather-monitoring/map/marker.png',
    //   iconSize: [40, 40],
    //   iconAnchor: [20, 39],
    //   popupAnchor: [0, -40]
    // });

    // for (let station of stations) {
    //   L.marker(
    //     [station.coords[0], station.coords[1]],
    //     {icon: markerIcon})
    //   .bindPopup(`<h5>${station.label}</h5>`)
    //   .on('click', () => {
    //     //Store key somewhere

    //     // $.getJSON(
    //     //   `http:\/\/api.wunderground.com/api/9470644e92f975d3/forecast10day/conditions/hourly10day/q/pws:${station.id}.json`,
    //     //   (data) => {
    //     //     this.data = data;
    //     //     Session.set('forecast', data.forecast.simpleforecast.forecastday);
    //     //     Session.set('conditions', data.current_observation);
    //     //     Session.set('hourlyForecast', data.hourly_forecast);

    //     //     this.extractData(data.hourly_forecast)

    //     //     Session.set('weatherFetched', 'true');
    //     //   })

    //     /*********** TEST DATA ***********/
    //     const {getSampleResponse} = this.props;

    //     const sampleData = getSampleResponse();

    //     Session.set('forecast', sampleData.forecast.simpleforecast.forecastday);
    //     Session.set('conditions', sampleData.current_observation)
    //     Session.set('hourlyForecast', sampleData.hourly_forecast);

    //     Session.set('meteogramData', this.getMeteogramData(sampleData));

    //     Session.set('weatherFetched', 'true');
    //     /*********** TEST DATA ***********/
    //   })
    //   .addTo(map);
    // }
  }

  toMeters(elevationFeet) {
    let m = parseInt(elevationFeet) * 0.3048;
    return Number(Math.round(m));
  }

  formatCoordinates(c) {
    return Number(Math.round(c+'e2')+'e-2');
  }

  getMeteogramData(data) {
    const series = this.getSeries(data.hourly_forecast);
    const tickPositions = this.getTickPositions(data.forecast.simpleforecast.forecastday);

    const altTickPositions = this.getAltTickPositions(data.forecast.simpleforecast.forecastday);

    const meteogramData = {
      "series": series,
      "tickPositions": tickPositions,
      "altTickPositions": altTickPositions
    }

    return meteogramData;
  }

  getTickPositions(df) {
    const tickPositions = [];
    let year = 0;
    let month = 0;
    let day = 0;

    for (let entry of df) {
      const date = entry.date;
      year = date.year;
      month = date.month - 1;
      day = date.day;

      tickPositions.push(Date.UTC(year, month, day, 0))
    }

    const nextDay = day < 31 ? day + 1 : 1
    tickPositions.push(Date.UTC(year, month, nextDay, 0));

    return tickPositions;
  }

  getAltTickPositions(df) {
    const altTickPositions = [];
    let year = 0;
    let month = 0;
    let day = 0;

    for (let entry of df) {
      const date = entry.date;
      year = date.year;
      month = date.month - 1;
      day = date.day;

      altTickPositions.push(Date.UTC(year, month, day, 12))
    }

    const nextDay = day < 31 ? day + 1 : 1
    altTickPositions.push(Date.UTC(year, month, nextDay, 12));

    return altTickPositions;
  }

  getSeries(hf) {
    const temperature = [];
    const wind = [];
    const pressure = [];
    const pop = []

    for (let entry of hf) {
      const ftc = entry.FCTTIME;
      const utcDate = Date.UTC(ftc.year, ftc.mon-1, ftc.mday, ftc.hour);

      temperature.push([utcDate, parseFloat(entry.temp.metric)]);

      pressure.push([utcDate, parseFloat(entry.mslp.metric)]);

      pop.push([utcDate, parseFloat(entry.pop)]);

    }

    const hourlyData = {
      "temperature": temperature,
      "wind": wind,
      "pressure": pressure,
      "pop": pop
    }

    return hourlyData;
  }

  renderMeteogram() {
    const {getHistoricalDay} = this.props;

    return (
        <RainChartWithForecast />
      )
  }

  render() {
    return (
      <div>
        <div className="mdl-grid">
          <div className="mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone dss-form-element">
            <label for="select-province">Province</label>&nbsp;
            <select id="select-province" className="dss-dropdown">
              <option>Isabela</option>
            </select>
          </div>

          <div className="mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone dss-form-element">
            <label for="select-municipality">Municipality</label>&nbsp;
            <select id="select-municipality" className="dss-dropdown">
              <option>Echague</option>
            </select>
          </div>

          <div className="mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone dss-form-element">
            <label for="select-crop">Crop</label>&nbsp;
            <select id="select-crop" className="dss-dropdown">
              <option>Rice</option>
            </select>
          </div>

          <div className="mdl-cell--3-col-desktop mdl-cell--4-col-tablet mdl-cell--2-col-phone dss-form-element">
             <label for="select-variety">Variety</label>&nbsp;
            <select id="select-variety" className="dss-dropdown">
              <option>RC14</option>
            </select>
          </div>

          <div className="mdl-cell mdl-cell--6-col-desktop mdl-cell--4-col-phone">
            {this.renderMeteogram()}
          </div>
        </div>
      </div>
    );
  }
}

export default DSSMapChart;
//
// <div id="dss-map-container">
//           <div id="dss-map"></div>
//         </div>