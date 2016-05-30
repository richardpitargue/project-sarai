import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import YCForm from './../../components/yield-calculator/yc-form.jsx'


const deps = (context, actions) => ({
  callback: actions.YieldCalculator.insertWeatherStation,
  context: () => context
})

const YCAddRedux = ({context}, onData) => {
  onData(null, {})
}

export default composeAll(
  composeWithTracker(YCAddRedux),
  useDeps(deps)
)(YCForm);