import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RainGraph from './rain-graph';
import WeatherStationMap from './weather-station-map';
import CustomModules from './custom-modules';
import WSMap from './map/ws-map';
import YieldCalculator from './modules/yield-calculator'
// import SoilMoisture from './modules/soil-moisture'

import TwoColumnSection from './../components/two-column-section.jsx';
import DSSLayout from './../components/dss-layout.jsx';
import MinorHeader from './../components/ui-components/minor-header.jsx'

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherStations, Labels} = Collections;

  const sections = [];
  const spacing = false;
  const classList = ['dss-sections']

  if (Meteor.subscribe('weather-stations').ready()
    //&& Meteor.subscribe('labels').ready()
    ) {

    const weatherStations = WeatherStations.find().fetch();
    // const plantingDateOptions = Labels.findOne({name: "YC_PlantingDateOptions"});

    // const map = React.createElement(WeatherStationMap, {stations})
    // const map = React.createElement(WSMap, {weatherStations})

    sections.push(React.createElement(WSMap, {weatherStations}))

    const customModules = React.createElement(CustomModules, {spacing})

    const mraMinorHeader = React.createElement(MinorHeader, {title: 'CUMULATIVE RAINFALL', helpText: 'help', id: 'mra'})

    sections.push(React.createElement(DSSLayout, {customModules, spacing, minorHeader: mraMinorHeader}))

    const ycMinorHeader = React.createElement(MinorHeader, {title: 'YIELD CALCULATOR', helpText: 'The Yield calculator uses weather data averages of the past week to predict the yield of your crops if they were planted this week. Please provide a solar radiation reading. Values are usually within the range of  13 to 23 MJ', id: 'yc'})

    sections.push(React.createElement(YieldCalculator, {
      minorHeader: ycMinorHeader})
    )

    // const smMinorHeader = React.createElement(MinorHeader, {title: 'SOIL MOISTURE MONITORING', helpText: 'This section calculates the soil moisture deficit for the past 30 days. The assumption is that the deficit starts at baseline 0'})

    // sections.push(React.createElement(SoilMoisture, {smMinorHeader}))

    onData(null, {sections, spacing, classList});

  }

};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);