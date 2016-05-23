import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RainfallChart from './rainfall-chart'
import TempRangeChart from './temp-range-chart'
import TopList from './top-list'

import HistoryCharts from './../../components/dashboard/history-charts.jsx'

const composeChart = ({context}, onData) => {
  const {Meteor, Collections, dssAdminStore} = context();
  const {WeatherData, WeatherStations} = Collections

  const spacing = false
  const classList = []

  const charts = []

  if (Meteor.subscribe('weather-stations').ready()
      && Meteor.subscribe('weather-data').ready()) {

    onData(null, {charts, spacing, classList})

    return dssAdminStore.subscribe(() => {
      const {wsID} = dssAdminStore.getState()

      charts.push(React.createElement(TempRangeChart, {wsID}))
      charts.push(React.createElement(RainfallChart, {wsID}))

      onData(null, {wsID, charts, spacing, classList})
    })
  }

};

export default composeAll(
  composeWithTracker(composeChart),
  useDeps()
)(HistoryCharts);