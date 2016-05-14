import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSAdminWSMap from './../../components/weather-stations/dss-admin-ws-map.jsx';

const deps = (context, actions) => ({
  addWS: actions.Weather.insertWeatherStation,
  editWS: actions.Weather.editWeatherStation,
  deleteWS: actions.Weather.deleteWeatherStation,
  context: () => context
})

const composer = ({context, weatherStations}, onData) => {
  const {Meteor} = context

  onData(null, {weatherStations})

  // return (dssAdminStore.subscribe(() => {

  // })
}

export default composeAll(
  compose(composer),
  useDeps(deps)
)(DSSAdminWSMap);