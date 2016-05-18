import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RainfallChart from './rainfall-chart'
import TempRangeChart from './temp-range-chart'
import TopList from './top-list'

import DashCharts from './../../components/dashboard/dash-charts.jsx'


const composeChart = ({context}, onData) => {
  const {Meteor, Collections, dssAdminStore} = context();
  const {WeatherData, WeatherStations} = Collections

  const spacing = false
  const classList = []

  const charts = []
  const lists = []

  if (Meteor.subscribe('weather-stations').ready()
      && Meteor.subscribe('weather-data').ready()) {

    lists.push(React.createElement(TopList, {
      compareValue: 'RAINFALL', //maxtemp, avetemp
      compareOp: 'CUMULATIVE', // average, minima, maxima
      sort: 'HIGHEST',
      range: '30_DAYS', //10_DAYS, ALL_TIME,
      limit: 3,
      labels: {
        header: 'Cumulative Rainfall',
        title: 'Top 3 rainy areas for the past 30 days',
        unit: 'mm'
      }
    }))

    lists.push(React.createElement(TopList, {
      compareValue: 'TEMP_AVE',
      compareOp: 'MEAN',
      sort: 'HIGHEST',
      range: '30_DAYS',
      limit: 5,
      labels: {
        header: 'Average Temperature',
        title: 'Top 5 hottest areas for the past 30 days',
        unit: '°C'
      }
    }))

    onData(null, {charts, lists, spacing, classList})

    return dssAdminStore.subscribe(() => {
      const {wsID} = dssAdminStore.getState()

      charts.push(React.createElement(TempRangeChart, {wsID}))
      charts.push(React.createElement(RainfallChart, {wsID}))

      onData(null, {wsID, charts, lists, spacing, classList})
    })
  }

};

export default composeAll(
  composeWithTracker(composeChart),
  useDeps()
)(DashCharts);