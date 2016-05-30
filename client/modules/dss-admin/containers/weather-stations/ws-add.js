import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import WSForm from './../../components/weather-stations/ws-form.jsx'
import DSSAdminHeader from './../../components/ui-components/dss-admin-header.jsx'

const deps = (context, actions) => ({
  callback: actions.Weather.insertWeatherStation,
  context: () => context
})

const WSAddRedux = ({context}, onData) => {
  const header = React.createElement(DSSAdminHeader, {title: 'Add New Weather Station'})

  onData(null, {header})

}

export default composeAll(
  composeWithTracker(WSAddRedux),
  useDeps(deps)
)(WSForm);