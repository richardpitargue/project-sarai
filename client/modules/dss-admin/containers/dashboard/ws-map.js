import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import MapSelector from './../../components/dashboard/map-selector.jsx'

const deps = (context, actions) => ({
  getCurrentConditions: actions.Weather.getCurrentConditions,
  context: () => context
})

const composer = ({context}, onData) => {
  const {dssAdminStore, Collections} = context()
  const {WeatherData} = Collections

  onData(null, {})

  if (Meteor.subscribe('weather-data').ready()) {
    return dssAdminStore.subscribe(() => {
      const {stationID, observation} = dssAdminStore.getState()
      const recordCount = WeatherData.find({id: stationID}).count()
      const firstRecord = WeatherData.findOne({id: stationID})
      const earliestDate = `${firstRecord.date.year}-${firstRecord.date.month + 1}-${firstRecord.date.day}`

      onData(null, {recordCount, earliestDate, stationID, observation})
    })
  }
}

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(MapSelector);