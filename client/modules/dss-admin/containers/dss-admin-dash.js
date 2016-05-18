import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DashCharts from './dashboard/dash-charts'

import AWSSquare from './../components/dashboard/aws-squares.jsx'
import DSSAdminHeader from './../components/ui-components/dss-admin-header.jsx'
import DSSAdminRoot from './../components/dss-admin-root.jsx'

import {CustomModules} from '/client/modules/dss'

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherStations} = Collections

  const sections = [];
  const spacing = false;

  const title = 'Dashboard'

  sections.push(React.createElement(DSSAdminHeader, {title}))

  if (Meteor.subscribe('weather-stations').ready()) {
    const weatherStations = WeatherStations.find({}).fetch()

    sections.push(React.createElement(AWSSquare, {weatherStations}))


  }

  sections.push(React.createElement(CustomModules))

  sections.push(React.createElement(DashCharts))

  onData(null, {sections, spacing})
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);