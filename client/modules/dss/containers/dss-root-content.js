import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections} = context();
  const {Labels} = Collections;

  const sections = [];
  const spacing = false;

  // if (Meteor.subscribe('labels').ready()) {
  //   const locations = Labels.findOne({name: "YC_IsabelaMunicipalities"});
  //   const locations = Labels.findOne({name: "YC_IsabelaMunicipalitiesSelect"});
  //   const filteredLocations = locations.data.filter((entry) => {
  //     return !(entry.group == null)
  //   })
  // }

  // sections.push(React.createElement(YieldCalculator, {filteredLocations, plantingDateOptions, soilTextures}));
    

  onData(null, {sections, spacing});
};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);