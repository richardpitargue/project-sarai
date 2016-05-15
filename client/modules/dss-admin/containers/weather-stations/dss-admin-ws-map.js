import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSAdminWSMap from './../../components/weather-stations/dss-admin-ws-map.jsx';

const deps = (context, actions) => ({
  addWS: actions.Weather.insertWeatherStation,
  goToEditPage: actions.Weather.goToEditPage,
  deleteWS: actions.Weather.deleteWeatherStation,
  setWSId: actions.Weather.setWSId,
  context: () => context
})

const composer = ({context, weatherStations}, onData) => {
  const {Meteor, Collections, dssAdminStore} = context()
  const {WeatherStations} = Collections

  onData(null, {weatherStations})

  if (Meteor.subscribe('weather-stations').ready()) {
    return dssAdminStore.subscribe(() => {

      const wsID = dssAdminStore.getState().wsID

      const station = WeatherStations.findOne({id: wsID})

      console.log('Selected station: ')
      console.log(wsID)

      onData(null, {weatherStations, station})
    })
  }
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(DSSAdminWSMap);