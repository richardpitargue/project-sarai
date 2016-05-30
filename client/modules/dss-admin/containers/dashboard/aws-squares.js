import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ModulesForm from './../../components/dashboard/aws-squares.jsx';

const deps = (context, actions) => ({
  getCurrentConditions: actions.Weather.getCurrentConditions,
  context: () => context
})

const AWSSquaresRedux = ({context}, onData) => {
  const {Meteor, dssAdminStore, Collections} = context()

  onData(null, {})

  return dssAdminStore.subscribe(() => {
    const {stationID} = dssAdminStore.getState()
    onData(null, {stationID})
  })
}

export default composeAll(
  composeWithTracker(AWSSquaresRedux),
  useDeps(deps)
)(ModulesForm);