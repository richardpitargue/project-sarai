import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import YieldFormulasTable from './yield-calculator/yield-formulas-table'

import DSSAdminHeader from './../components/ui-components/dss-admin-header.jsx'

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {YieldFormulas} = Collections

  const sections = [];
  const spacing = false;

  const title = 'Yield Calculator'

  if (Meteor.subscribe('yield-formulas').ready()) {
    const formulas = YieldFormulas.find().fetch()

    sections.push(React.createElement(DSSAdminHeader, {title}))

    sections.push(React.createElement(YieldFormulasTable, {formulas}))

    onData(null, {sections, spacing})
  }
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);