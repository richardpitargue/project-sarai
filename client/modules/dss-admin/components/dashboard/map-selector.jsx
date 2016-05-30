import React from 'react';
import classNames from 'classnames';

import CurrentWeather from './../ui-components/current-weather.jsx'

class MapSelector extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {weatherStations, getCurrentConditions, stationID} = this.props;

    //Store all this data in db
    const northEast = L.latLng(21.924058, 115.342984);
    const southWest = L.latLng(4.566972, 128.614468);
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('dash-ws-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7
    });

    const markerIcon = L.icon({
      iconUrl: '/images/dss/map/marker.png',
      iconSize: [21, 39],
      iconAnchor: [10, 38],
      popupAnchor: [0, -40]
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
      // maxZoom: 14,
      id: 'mcarandang.p67769a5',
      accessToken: 'pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg'
    }).addTo(map);

    map.on('click', (e) => {
      // this.coords0.value = e.latlng.lat
      // this.coords1.value = e.latlng.lng
    })

    for (let station of weatherStations) {
      const marker = L.marker(
        [station.coords[0], station.coords[1]],
        {icon: markerIcon})
      .bindPopup(`<h5>${station.label}</h5>`)
      .on('click', () => {
        getCurrentConditions(station.id)
      })

      marker.addTo(map)

      if (this.props.stationID == station.id) {
        console.log('found a match')
        map.panTo(new L.LatLng(station.coords[0], station.coords[1]))
      }
    }
  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }


  render() {
    const {spacing, classList, stationID, observation} = this.props;
    // const noSpacing = 'mdl-grid--no-spacing';
    // const className = spacing ? classNames('mdl-grid', 'section-list', classList)
    //   : classNames('mdl-grid', 'section-list', noSpacing, classList);
    const rowName = classNames('mdl-cell', 'mdl-cell--10-col-desktop', 'mdl-cell--1-offset-desktop', 'mdl-cell--6-col-tablet', 'mdl-cell--1-offset-tablet', 'mdl-cell--4-col-phone', 'dark-row')
    const gridClass = classNames('mdl-grid', 'mdl-grid--no-spacing', classList)
    const twoCol = classNames('mdl-cell', 'mdl-cell--6-col', 'mdl-cell--4-col-phone')

    const observationTime = observation ? observation.observation_time : 'Last Updated on'
    const tempC = observation ? observation.temp_c : ''
    const iconURL = observation ? observation.icon_url : ''
    const feelsLikeC = observation ? observation.feelslike_c : ''
    const weather = observation ? observation.weather : ''
    const relativeHumidity = observation ? observation.relative_humidity : ''
    const pressureMB = observation ? observation.pressure_mb : ''
    const windDir = observation ? observation.wind_dir : ''
    const windGustKPH = observation ? observation.wind_gust_kph : ''

    return (
      <div className={gridClass}>
        <div className={rowName}>
          <div className="mdl-grid">
            <div id="dash-ws-map" className={twoCol}>
            </div>

            <div id="ws-map" className={twoCol}>
              <div className="mdl-grid">
                <CurrentWeather
                  stationID={stationID}
                  observationTime={observationTime}
                  tempC={tempC}
                  iconURL={iconURL}
                  feelsLikeC={feelsLikeC}
                  weather={weather}
                  relativeHumidity={relativeHumidity}
                  pressureMB={pressureMB}
                  windDir={windDir}
                  windGustKPH={windGustKPH}

                />
              </div>

            </div>

          </div>
        </div>
      </div>
    );
  }
}

MapSelector.propTypes = {
  classList: React.PropTypes.arrayOf(React.PropTypes.string),
  sections: React.PropTypes.arrayOf(React.PropTypes.element),
  spacing: React.PropTypes.bool
};

MapSelector.defaultProps = {
  classList: [],
  sections: [],
  spacing: true
};

export default MapSelector;
