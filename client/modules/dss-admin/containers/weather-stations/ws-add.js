import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import WSForm from './../../components/weather-stations/ws-form.jsx'

const deps = (context, actions) => ({
  callback: actions.Weather.insertWeatherStation,
  context: () => context
})

const WSAddRedux = ({context}, onData) => {

  onData(null, {})

}

export default composeAll(
  composeWithTracker(WSAddRedux),
  useDeps(deps)
)(WSForm);