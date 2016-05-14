import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSAdminWSCompose from './dss-admin-ws-compose';

import DSSAdminHeader from './../components/ui-components/dss-admin-header.jsx'

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherStations} = Collections

  const sections = [];
  const spacing = false;

  const title = 'Weather Stations'

  if (Meteor.subscribe('weather-stations').ready()) {
    const weatherStations = WeatherStations.find().fetch()

    sections.push(React.createElement(DSSAdminHeader, {title}))

    sections.push(React.createElement(DSSAdminWSCompose, {weatherStations}))

    onData(null, {sections, spacing})
  }
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);