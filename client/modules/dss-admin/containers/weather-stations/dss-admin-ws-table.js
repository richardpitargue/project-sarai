import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSAdminWSTable from './../../components/weather-stations/dss-admin-ws-table.jsx';

const deps = (context, actions) => ({
  goToAddPage: actions.Weather.goToAddPage,
  addWS: actions.Weather.insertWeatherStation,
  goToEditPage: actions.Weather.goToEditPage,
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
)(DSSAdminWSTable);