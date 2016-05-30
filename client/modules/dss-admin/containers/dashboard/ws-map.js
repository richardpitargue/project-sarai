import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MapSelector from './../../components/dashboard/map-selector.jsx'

const deps = (context, actions) => ({
  getCurrentConditions: actions.Weather.getCurrentConditions,
  context: () => context
})

const composer = ({context}, onData) => {
  const {dssAdminStore} = context()
  onData(null, {})

  return dssAdminStore.subscribe(() => {
    const {stationID, observation} = dssAdminStore.getState()
    onData(null, {stationID, observation})
  })
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(MapSelector);