import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import WeatherStationMap from './../components/weather-station-map.jsx';

const deps = (context, actions) => ({
  getRainfallData: actions.DataRetriever.getRainfallData,
  context: () => context
})

const WSMapRedux = ({context, stations}, onData) => {
  const {Meteor, Collections, dssStore} = context()

  onData(null, {stations})
}

export default composeAll(
  compose(WSMapRedux),
  useDeps(deps)
)(WeatherStationMap);