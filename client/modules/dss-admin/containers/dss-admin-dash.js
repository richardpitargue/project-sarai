import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSAdminHeader from './../components/ui-components/dss-admin-header.jsx'
import AWSSquares from './dashboard/aws-squares'
import WSMap from './dashboard/ws-map'
import DashCharts from './dashboard/dash-charts'

import {CustomModules} from '/client/modules/dss'

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherStations} = Collections

  const sections = [];
  const spacing = false;
  const classList = ['dss-dash-sections']

  const title = 'Dashboard'

  sections.push(React.createElement(DSSAdminHeader, {title}))

  if (Meteor.subscribe('weather-stations').ready()) {
    const weatherStations = WeatherStations.find({}).fetch()

    sections.push(React.createElement(AWSSquares, {weatherStations}))

    sections.push(React.createElement(WSMap, {weatherStations}))
  }


  sections.push(React.createElement(DashCharts))

  onData(null, {sections, spacing, classList})
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);