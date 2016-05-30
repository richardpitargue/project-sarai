import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import WSForm from './../../components/weather-stations/ws-form.jsx'

const deps = (context, actions) => ({
  callback: actions.Weather.editWeatherStation,
  context: () => context
})

const WSEditRedux = ({context}, onData) => {
  const {dssAdminStore, Meteor, Collections} = context()
  const {WeatherStations} = Collections

  const state = dssAdminStore.getState()

  if (Meteor.subscribe('weather-stations').ready()) {
    const station = WeatherStations.findOne({id: state.wsID})

    const _id = station._id
    const id = station.id
    const label = station.label
    const coords0 = station.coords[0]
    const coords1 = station.coords[1]

    onData(null, {station, _id, id, label, coords0, coords1})
  }

}

export default composeAll(
  composeWithTracker(WSEditRedux),
  useDeps(deps)
)(WSForm);