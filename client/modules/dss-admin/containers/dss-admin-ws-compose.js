import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSAdminWeatherStations from './../components/dss-admin-ws.jsx';

const deps = (context, actions) => ({
  addWS: actions.Weather.insertWeatherStation,
  editWS: actions.Weather.editWeatherStation,
  deleteWS: actions.Weather.deleteWeatherStation,
  getYesterdayWeather: actions.Weather.getYesterdayWeather,
  context: () => context
})

const composer = ({context, weatherStations}, onData) => {

  onData(null, {weatherStations})
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(DSSAdminWeatherStations);