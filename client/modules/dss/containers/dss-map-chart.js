import React from 'react';
import {useDeps, composeAll, compose} from 'mantra-core';

import DSSMapChart from './../components/dss-map-chart.jsx';

const composer = ({stations, plantingDateOptions}, onData) => {

  onData(null, {stations, plantingDateOptions});
};

const deps = (context, actions) => ({
  get30Days: actions.SampleData.get30Days,
  getRainfallData: actions.DataRetriever.getRainfallData,
  context: () => context
})

const DSSMapChartRedux = ({context, stations, plantingDateOptions}, onData) => {
  const {Meteor, Collections, dssStore} = context()
  const {WeatherData} = Collections

  onData(null, {stations, plantingDateOptions})

  return dssStore.subscribe(() => {
    console.log('subscribed to dss store..')
    const {stationID} = dssStore.getState()

      $.getJSON(
      `http:\/\/api.wunderground.com/api/9470644e92f975d3/forecast10day/q/pws:${stationID}.json`,
      (data) => {
        console.log(data)
        //Collate forecasted rain
        const forecastRain = []

        for (let entry of data.forecast.simpleforecast.forecastday) {
          const utcDate = Date.UTC(entry.date.year, entry.date.month - 1, entry.date.day);

          forecastRain.push({x: utcDate, y: parseInt(entry.qpf_allday.mm)})
          //forecastTemp.push([parseInt(entry.high.celsius), parseInt(entry.low.celsius)])
        }

        //Get Records For The Past 30 Days
        const date = new Date();
        let y = date.getFullYear();
        let m = date.getMonth();
        let d = date.getDate();

        const records = []

        while (records.length < 30) {
          //go back one day. Improve this
          if (d > 1) {
            d -= 1
          } else {
            //Go back a month
            if (m > 0) {
              m -= 1

              if ([0, 2, 4, 6, 7, 9].indexOf(m)) {
                d = 31
              } else if (m == 1) {
                d = 29
              } else  {
                d = 30
              }
            }

            else {
              //Go back to prev year
              y -= 1
              m = 11
              d = 31
            }
          }

          if (Meteor.subscribe('weather-data').ready()) {
            //This sucks. Please change it
            const r = WeatherData.findOne({
              id: stationID,
              date : {
                year: y,
                month: m,
                day: d
              }
            })

            if (r == null) {
              console.log('Missing an entry')
            }
            records.push(r)
          }




        }
        console.log(records)
        const pastRainfall = []
        const accumulatedRainfall = []
        let totalRainfall = 0

        //Collate past rainfall
        for (let entry of records.reverse()) {
          const utcDate = Date.UTC(entry.date.year, entry.date.month, entry.date.day);

          totalRainfall += entry.data.rainfall

          pastRainfall.push({x: utcDate, y: entry.data.rainfall})
          accumulatedRainfall.push({x: utcDate, y: totalRainfall})
        }


        //Collate accumulation for forecasted rain
        let fa = accumulatedRainfall[accumulatedRainfall.length - 1].y
        const forecastAccumulation = []

        for (let entry of forecastRain) {
          fa += entry.y

          forecastAccumulation.push({x: entry.x, y: fa})
        }

        const chartData = {
          "pastRainfall" : pastRainfall,
          "accumulatedRainfall" : accumulatedRainfall,
          "forecastRain" : forecastRain,
          "forecastAccumulation" : forecastAccumulation
        }

        onData(null, {stations, plantingDateOptions, chartData});
      })


  })
}

export default composeAll(
  compose(DSSMapChartRedux),
  useDeps(deps)
)(DSSMapChart);