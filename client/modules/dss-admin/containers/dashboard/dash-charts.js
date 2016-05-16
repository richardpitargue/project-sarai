import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RainfallChart from './rainfall-chart'
import TempRangeChart from './temp-range-chart'

import TopList from './../../components/dashboard/top-list.jsx'
import DashCharts from './../../components/dashboard/dash-charts.jsx'


const composeChart = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherData, WeatherStations} = Collections

  const charts = []
  const lists = []

  if (Meteor.subscribe('weather-data').ready()) {
    charts.push(React.createElement(TempRangeChart))
    charts.push(React.createElement(RainfallChart))

    const rainiest = WeatherStations.find({}).fetch()
    console.log(rainiest)

    lists.push(React.createElement(TopList, {items: rainiest}))

    onData(null, {charts, lists})

  }

};

export default composeAll(
  composeWithTracker(composeChart),
  useDeps()
)(DashCharts);