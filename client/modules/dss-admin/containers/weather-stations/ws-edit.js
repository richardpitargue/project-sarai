import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import WSForm from './../../components/weather-stations/ws-form.jsx'

const deps = (context, actions) => ({
  editWS: actions.Weather.editWeatherStation,
  context: () => context
})

const WSEditRedux = ({context}, onData) => {
  const {dssAdminStore, Meteor, Collections} = context()
  const {WeatherStations} = Collections

  const state = dssAdminStore.getState()

  if (Meteor.subscribe('weather-stations').ready()) {
    const station = WeatherStations.findOne({id: state.wsID})

    onData(null, {station})
  }

}

export default composeAll(
  composeWithTracker(WSEditRedux),
  useDeps(deps)
)(WSForm);