import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSMapChart from './dss-map-chart';

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


    //If StationID is not provided, don't pass any weather data. Page will display instructions instead.

    sections.push(React.createElement(DSSMapChart, {stations, plantingDateOptions
    }));

    onData(null, {sections, spacing});

  }

};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);