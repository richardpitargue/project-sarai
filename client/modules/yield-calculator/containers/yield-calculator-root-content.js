import React from 'react';

import YieldCalculatorMap from './../components/yield-calculator-map.jsx';
import YieldCalculator from './yield-calculator';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {ChartLabels} = Collections;

  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('chart-labels').ready()) {
    const plantingDateOptions = ChartLabels.findOne({name: "plantingDateOptions"});

    sections.push(React.createElement(YieldCalculator, {plantingDateOptions}));
  }  

  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);