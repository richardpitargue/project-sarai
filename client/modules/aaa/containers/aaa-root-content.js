import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import {SectionList} from '/client/modules/ui-components';

import AAARoot from  './aaa-root';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {LandingData, WeatherStations} = Collections;

  const sections = [];
  const spacing = false;


  sections.push(React.createElement(AAARoot));


  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);