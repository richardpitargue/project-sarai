import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import HighStock from './../../components/dashboard/high-stock.jsx'

const composeChart = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherData} = Collections

  //sample
  const id = 'ICAGAYAN2'

  if (Meteor.subscribe('weather-data').ready()) {
    const records = WeatherData.find({id}).fetch()

    const id = 'temp-range'
    const chartName = 'TempRange'
    const chartRange = 'arearange'
    const chartTitle = 'Temperature Range'
    const chartSeries = [{
      name: 'Temperature',
      data: [
        [1388538000000, 1.1, 4.7],
        [1388624400000, 1.8, 6.4],
        [1388710800000, 1.7, 6.9],
        [1388797200000, 2.6, 7.4],
        [1388883600000, 3.3, 9.3],
        [1388970000000, 3.0, 7.9],
        [1389056400000, 3.9, 6.0],
        [1389142800000, 3.9, 5.5]
      ]
    }]

    onData(null, {
      id,
      chartName,
      chartRange,
      chartTitle,
      chartSeries})

  }

};

export default composeAll(
  composeWithTracker(composeChart),
  useDeps()
)(HighStock);