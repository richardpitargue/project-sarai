import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSAdminWSCompose from './dss-admin-ws-compose';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherStations} = Collections

  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('weather-stations').ready()) {
    const weatherStations = WeatherStations.find().fetch()

    console.log(weatherStations)

    sections.push(React.createElement(DSSAdminWSCompose, {weatherStations}))

    onData(null, {sections, spacing})
  }
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);