import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import HighStock from './../../components/dashboard/high-stock.jsx'

const composeChart = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherData} = Collections

  //sample
  const id = 'IILOCOSR3'

  if (Meteor.subscribe('weather-data').ready()) {

    const records = WeatherData.find({id: 'IILOCOSR3'}).fetch()

    const id = 'temp-range'
    const chartName = 'TempRange'
    const chartRange = 'arearange'
    const chartTitle = 'Temperature Range'


    let tempData = []

    for (let record of records) {
      const utcDate = Date.UTC(record.date.year, record.date.month, record.date.day)

      // chartSeries[0].data.push([utcDate, record.temp.min, record.temp.max])
      tempData.push([utcDate, record.data.temp.min, record.data.temp.max])

    }

    const chartSeries = [{
      name: 'Temperature',
      data: tempData
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