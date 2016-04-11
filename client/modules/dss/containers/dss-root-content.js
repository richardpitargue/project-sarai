import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSMapChart from './dss-map-chart';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {WeatherStations} = Collections;

  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('weather-stations').ready()) {
    const stations = WeatherStations.find().fetch();

    sections.push(React.createElement(DSSMapChart, {stations}));
  }
  
  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);