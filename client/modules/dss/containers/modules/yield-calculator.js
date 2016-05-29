import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';


import YieldCalculator from './../../components/modules/yield-calculator.jsx'

const deps = (context, actions) => ({
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
)(YieldCalculator);