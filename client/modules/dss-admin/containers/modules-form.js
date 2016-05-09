import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import ModulesFormCompose from './modules-form-compose';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();

  const sections = [];
  const spacing = false;

  sections.push(React.createElement(ModulesFormCompose))

  onData(null, {sections, spacing})
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);