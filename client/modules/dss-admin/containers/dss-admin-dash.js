import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import TempRangeChart from './dashboard/temp-range-chart'

import DSSAdminHeader from './../components/ui-components/dss-admin-header.jsx'
import DSSAdminRoot from './../components/dss-admin-root.jsx'

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();

  const sections = [];
  const spacing = false;

  const title = 'Dashboard'

  sections.push(React.createElement(DSSAdminHeader, {title}))

  sections.push(React.createElement(DSSAdminRoot))

  sections.push(React.createElement(TempRangeChart))

  onData(null, {sections, spacing})
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);