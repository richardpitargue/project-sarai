import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import Stats from './../../components/dashboard/stats.jsx'

const deps = (context, actions) => ({
  context: () => context
})

const composer = ({context}, onData) => {

  onData(null, {})
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(Stats);