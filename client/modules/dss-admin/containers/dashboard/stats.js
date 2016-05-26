import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Stats from './../../components/dashboard/stats.jsx'

const deps = (context, actions) => ({
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
)(Stats);