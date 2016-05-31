import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSAdminHeader from './../components/ui-components/dss-admin-header.jsx'

import TopList from './dashboard/top-list'
import AWSSquares from './dashboard/aws-squares'
import WSMap from './dashboard/ws-map'
import HistoryCharts from './dashboard/history-charts'
import Stats from './dashboard/stats'

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherStations} = Collections

  const sections = [];
  const spacing = false;
  const classList = ['dss-dash-sections']

  const title = 'Welcome, Admin!'

  sections.push(React.createElement(DSSAdminHeader, {title}))

  if (Meteor.subscribe('weather-stations').ready()) {
    const weatherStations = WeatherStations.find({}).fetch()

    sections.push(React.createElement(AWSSquares, {weatherStations}))

    sections.push(React.createElement(WSMap, {weatherStations}))
  }

  //HISTORY CHARTS
  sections.push(React.createElement(HistoryCharts))


  const lists = []
  lists.push(React.createElement(TopList, {
      compareValue: 'RAINFALL', //maxtemp, avetemp
      compareOp: 'CUMULATIVE', // average, minima, maxima
      sort: 'HIGHEST',
      range: '30_DAYS', //10_DAYS, ALL_TIME,
      limit: 5,
      labels: {
        header: 'Cumulative Rainfall',
        title: 'Top 5 rainy areas for the past 30 days',
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

  sections.push(React.createElement(Stats, {spacing, lists}))
  //ADVISORIES

  //STATS


  onData(null, {sections, spacing, classList})
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);