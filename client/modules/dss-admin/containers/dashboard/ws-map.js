import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MapSelector from './../../components/dashboard/map-selector.jsx'

const deps = (context, actions) => ({
  setStationID: actions.Weather.setStationID,
  context: () => context
})

const composer = ({context}, onData) => {
  const {dssAdminStore} = context()
  onData(null, {})

  return dssAdminStore.subscribe(() => {
    const {stationID} = dssAdminStore.getState()
    onData(null, {stationID})
  })
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(MapSelector);