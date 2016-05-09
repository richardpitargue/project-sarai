import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSAdminModulesCompose from './dss-admin-modules-compose';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {DSSModules} = Collections

  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('dss-modules').ready()) {
    const modules = DSSModules.find().fetch()

    sections.push(React.createElement(DSSAdminModulesCompose, {modules}))

    onData(null, {sections, spacing})
  }
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);