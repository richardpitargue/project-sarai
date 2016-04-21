import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSMapChart from './../components/dss-map-chart.jsx';

const composer = ({stations}, onData) => {

  onData(null, {stations});
};

const deps = (context, actions) => ({
  getSampleResponse: actions.SampleData.getSampleResponse,
  getHistoricalDay: actions.SampleData.getHistoricalDay,
  context: () => context
})

export default composeAll(
  compose(composer),
  useDeps(deps)
)(DSSMapChart);