import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import WSMap from './../../components/dashboard/map-selector.jsx'

const deps = (context, actions) => ({
  setWSId: actions.Weather.setWSId,
  context: () => context
})

const composer = ({context}, onData) => {
  const {dssAdminStore} = context()
  onData(null, {})

  return dssAdminStore.subscribe(() => {
    const {wsID} = dssAdminStore.getState()
    onData(null, {wsID})
  })
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(WSMap);