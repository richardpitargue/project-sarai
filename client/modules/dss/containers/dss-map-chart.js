import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSMapChart from './../components/dss-map-chart.jsx';

const composer = ({stations, plantingDateOptions}, onData) => {

  onData(null, {stations, plantingDateOptions});
};

const deps = (context, actions) => ({
  get30Days: actions.SampleData.get30Days,
  getRainfallData: actions.DataRetriever.getRainfallData,
  updateWeatherData: actions.DataRetriever.updateWeatherData,
  context: () => context
})

const DSSMapChartRedux = ({context, stations, plantingDateOptions}, onData) => {
  const {Meteor, Collections, dssStore} = context()
  const {WeatherData} = Collections

  onData(null, {stations, plantingDateOptions})
}

export default composeAll(
  compose(DSSMapChartRedux),
  useDeps(deps)
)(DSSMapChart);