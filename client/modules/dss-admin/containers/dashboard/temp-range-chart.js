import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RangeAveChart from './../../components/dashboard/range-ave-chart.jsx'

const composeChart = ({context, wsID}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherData} = Collections

  if (Meteor.subscribe('weather-data').ready()) {

    const records = WeatherData.find({id: wsID}).fetch()

    const id = 'temp-range'
    const chartName = 'TempRange'
    const chartRange = 'arearange'
    const chartTitle = 'Temperature Range'


    const chartSeries = [
      {
        name: 'Temperature Range',
        data: [],
        type: 'arearange',
        color: '#ff9933'
      },
      {
        name: 'Average Temperature',
        data: [],
        type: 'line',
        color: '#1a0d00',
        // linkedTo: ':previous'
      }
    ]

    //don't want to get too much data
    let limit = 365

    for (let record of records.reverse()) {
      const utcDate = Date.UTC(record.date.year, record.date.month, record.date.day)

      // chartSeries[0].data.push([utcDate, record.temp.min, record.temp.max])
      chartSeries[0].data.push([utcDate, record.data.temp.min, record.data.temp.max])
      chartSeries[1].data.push([utcDate, record.data.temp.ave])

      limit -= 1
      if (limit == 0) break
    }

    chartSeries[0].data = chartSeries[0].data.reverse()
    chartSeries[1].data = chartSeries[1].data.reverse()


    console.log(chartSeries)
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
)(RangeAveChart);