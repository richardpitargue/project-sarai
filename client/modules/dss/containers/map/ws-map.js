import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MapSelector from './../../components/map/map-selector.jsx'

const deps = (context, actions) => ({
  getRainfallData: actions.DataRetriever.getRainfallData,
  context: () => context
})

const composer = ({context}, onData) => {
  const {dssStore} = context()
  onData(null, {})

  return dssStore.subscribe(() => {
    const {stationdID} = dssStore.getState()
    onData(null, {stationdID})
  })
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(MapSelector);