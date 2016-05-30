import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import math from 'mathjs';

import SoilMoisture from './../../components/modules/soil-moisture.jsx'

const deps = (context, actions) => ({
  context: () => context
})

const composer = ({context}, onData) => {
  const {Collections, dssStore} = context()
  const {YieldFormulas, WeatherData, WeatherStations} = Collections

  onData(null, {})

  if (Meteor.subscribe('yield-formulas').ready()
      && Meteor.subscribe('weather-data').ready()
      && Meteor.subscribe('weather-stations').ready()) {
    return dssStore.subscribe(() => {
      const {stationID} = dssStore.getState()




      onData(null, {station})
    })
  }

}

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(SoilMoisture);