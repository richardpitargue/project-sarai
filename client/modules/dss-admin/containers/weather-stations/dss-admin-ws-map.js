import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSAdminWSMap from './../../components/weather-stations/dss-admin-ws-map.jsx';

const deps = (context, actions) => ({
  addWS: actions.Weather.insertWeatherStation,
  goToEditPage: actions.Weather.goToEditPage,
  deleteWS: actions.Weather.deleteWeatherStation,
  setStationID: actions.Weather.setStationID,
  context: () => context
})

const composer = ({context, weatherStations}, onData) => {
  const {Meteor, Collections, dssAdminStore} = context()
  const {WeatherStations} = Collections

  onData(null, {weatherStations})

  if (Meteor.subscribe('weather-stations').ready()) {
    return dssAdminStore.subscribe(() => {

      const stationID = dssAdminStore.getState().stationID
      console.log(stationID)

      const station = WeatherStations.findOne({id: stationID})

      onData(null, {weatherStations, station})
    })
  }
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(DSSAdminWSMap);