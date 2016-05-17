import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RainfallChart from './rainfall-chart'
import TempRangeChart from './temp-range-chart'
import TopList from './top-list'

import DashCharts from './../../components/dashboard/dash-charts.jsx'


const composeChart = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherData, WeatherStations} = Collections

  const charts = []
  const lists = []

  if (Meteor.subscribe('weather-stations').ready()
      && Meteor.subscribe('weather-data').ready()) {
    charts.push(React.createElement(TempRangeChart))
    charts.push(React.createElement(RainfallChart))

    const rainiest = WeatherStations.find({}).fetch()

    lists.push(React.createElement(TopList, {
      compareValue: 'RAINFALL', //maxtemp, avetemp
      compareOp: 'CUMULATIVE', // average
      sort: 'HIGHEST',
      range: '30_DAYS', //10_DAYS, ALL_TIME,
      labels: {
        header: 'Cumulative Rainfall',
        title: 'Areas with the most rainfall for the past 30 days',
        unit: 'mm'
      }
    }))

    lists.push(React.createElement(TopList, {
      compareValue: 'TEMP_AVE',
      compareOp: 'MEAN',
      sort: 'HIGHEST',
      range: '30_DAYS',
      labels: {
        header: 'Average Temperature',
        title: 'Hottest areas for the past 30 days',
        unit: '°C'
      }
    }))

    onData(null, {charts, lists})

  }

};

export default composeAll(
  composeWithTracker(composeChart),
  useDeps()
)(DashCharts);