import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSAdminWSMap from './weather-stations/dss-admin-ws-map';
import DSSAdminWSTable from './weather-stations/dss-admin-ws-table';

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

    sections.push(React.createElement(DSSAdminWSMap, {weatherStations}))

    sections.push(React.createElement(DSSAdminWSTable, {weatherStations}))

    onData(null, {sections, spacing})
  }
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);