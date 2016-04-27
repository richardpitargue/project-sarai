import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSMapChart from './../components/dss-map-chart.jsx';

const composer = ({stations, plantingDateOptions}, onData) => {

  onData(null, {stations, plantingDateOptions});
};

const deps = (context, actions) => ({
  getPast30Days: actions.SampleData.getPast30Days,
  get10DayForecast: actions.SampleData.get10DayForecast,
  get30Days: actions.SampleData.get30Days,
  context: () => context
})

export default composeAll(
  compose(composer),
  useDeps(deps)
)(DSSMapChart);