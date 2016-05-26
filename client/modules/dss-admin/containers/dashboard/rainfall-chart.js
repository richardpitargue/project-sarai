import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RangeAveChart from './../../components/dashboard/range-ave-chart.jsx'
import BarChart from './../../components/dashboard/bar-chart.jsx';

const composeChart = ({context, wsID}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherData} = Collections


  if (Meteor.subscribe('weather-data').ready()) {

    const records = WeatherData.find({id: wsID}).fetch()

    const id = 'rainfall'
    const chartName = 'Rainfall'
    const chartTitle = 'Rainfall'


    const chartSeries = [
      {
        name: 'Rainfall',
        data: [],
        type: 'column',
        color: '#1a8cff'
      }
    ]

    for (let record of records) {
      const utcDate = Date.UTC(record.date.year, record.date.month, record.date.day)

      chartSeries[0].data.push([utcDate, record.data.rainfall])
    }

    onData(null, {
      id,
      chartName,
      chartTitle,
      chartSeries})

  }

};

export default composeAll(
  composeWithTracker(composeChart),
  useDeps()
)(RangeAveChart);