import React from 'react';
import L from 'leaflet';

class WeatherStationMap extends React.Component {
  componentDidMount() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }

    const {stations} = this.props;
    const {getRainfallData} = this.props;

    //Store all this data in db
    const northEast = L.latLng(21.924058, 115.342984);
    const southWest = L.latLng(4.566972, 128.614468);
    const bounds = L.latLngBounds(southWest, northEast);

    const map = L.map('dss-map', {
      maxBounds: bounds,
      center: [14.154604, 121.247505],
      zoom: 8,
      minZoom: 7
    });

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWNhcmFuZGFuZyIsImEiOiJjaWtxaHgzYTkwMDA4ZHZtM3E3aXMyYnlzIn0.x63VGx2C-BP_ttuEsn2fVg', {
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
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

    for (let station of stations) {
      L.marker(
        [station.coords[0], station.coords[1]],
        {icon: markerIcon})
      .bindPopup(`<h5>${station.label}</h5>`)
      .on('click', () => {
        //Store key somewhere

        // $.getJSON(
        //   `http:\/\/api.wunderground.com/api/9470644e92f975d3/forecast10day/conditions/hourly10day/q/pws:${station.id}.json`,
        //   (data) => {
        //     this.data = data;
        //     Session.set('forecast', data.forecast.simpleforecast.forecastday);
        //     Session.set('conditions', data.current_observation);
        //     Session.set('hourlyForecast', data.hourly_forecast);

        //     this.extractData(data.hourly_forecast)

        //     Session.set('weatherFetched', 'true');
        //   })

        /*********** TEST DATA ***********/

        getRainfallData(station.id)


        /*********** TEST DATA ***********/
      })
      .addTo(map);
    }

  }
  componentDidUpdate() {
    if (componentHandler) {
      componentHandler.upgradeDom();
    }
  }

  render() {
    return (
      <div id="dss-map" className="mdl-cell mdl-cell--6-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
      </div>
    )
  }
}

export default WeatherStationMap;