import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSMapChart from './dss-map-chart';
import RainGraph from './rain-graph';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherStations, Labels} = Collections;

  const sections = [];
  const spacing = false;

  if (Meteor.subscribe('weather-stations').ready()
    && Meteor.subscribe('labels').ready() && Meteor.subscribe('weather-data').ready()
    ) {

    const stations = WeatherStations.find().fetch();
    const plantingDateOptions = Labels.findOne({name: "YC_PlantingDateOptions"});


    sections.push(React.createElement(DSSMapChart, {stations, plantingDateOptions
    }));

    sections.push(React.createElement(RainGraph))


    onData(null, {sections, spacing});

  }

};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);