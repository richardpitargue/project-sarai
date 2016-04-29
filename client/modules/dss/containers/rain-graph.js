import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RainChartWithForecast from './../components/rain-chart-with-forecast.jsx';

const deps = (context, actions) => ({
  get30Days: actions.SampleData.get30Days,
  getRainfallData: actions.DataRetriever.getRainfallData,
  context: () => context
})

const DSSMapChartRedux = ({context}, onData) => {
  const {Meteor, Collections, dssStore} = context()
  const {WeatherData} = Collections
  onData(null, {})

  if (Meteor.subscribe('weather-data').ready()) {
    return dssStore.subscribe(() => {
      const {forecast, stationID} = dssStore.getState()
      console.log(`stationID is ${stationID}`)

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

      for (let entry of forecast) {
        fa += entry.y

        forecastAccumulation.push({x: entry.x, y: fa})
      }

      const chartData = {
        "pastRainfall" : pastRainfall,
        "accumulatedRainfall" : accumulatedRainfall,
        "forecastRain" : forecast,
        "forecastAccumulation" : forecastAccumulation
      }

      console.log('Finished assembling chart data')
      console.log(chartData)

      onData(null, {chartData, stationID})
    })
  }





  //get data from the store first, then (check if data exists) get stuff from the db

  // if (Meteor.subscribe('weather-data').ready()) {

  //     const {forecast, stationID} = dssStore.getState()

  //     //Get Records For The Past 30 Days
  //     const date = new Date();
  //     let y = date.getFullYear();
  //     let m = date.getMonth();
  //     let d = date.getDate();

  //     const records = []

  //     console.log('Subscribed to weather data!')
  //     while (records.length < 30) {
  //       //go back one day. Improve this
  //       if (d > 1) {
  //         d -= 1
  //       } else {
  //         //Go back a month
  //         if (m > 0) {
  //           m -= 1

  //           if ([0, 2, 4, 6, 7, 9].indexOf(m)) {
  //             d = 31
  //           } else if (m == 1) {
  //             d = 29
  //           } else  {
  //             d = 30
  //           }
  //         }

  //         else {
  //           //Go back to prev year
  //           y -= 1
  //           m = 11
  //           d = 31
  //         }
  //       }


  //       //This sucks. Please change it
  //       const r = WeatherData.findOne({
  //         id: stationID,
  //         date : {
  //           year: y,
  //           month: m,
  //           day: d
  //         }
  //       })

  //       if (r == null) {
  //         console.log('Missing an entry')
  //       }
  //       records.push(r)

  //     }

  //     console.log(records)

  //     const pastRainfall = []
  //     const accumulatedRainfall = []
  //     let totalRainfall = 0

  //     //Collate past rainfall
  //     for (let entry of records.reverse()) {
  //       const utcDate = Date.UTC(entry.date.year, entry.date.month, entry.date.day);

  //       totalRainfall += entry.data.rainfall

  //       pastRainfall.push({x: utcDate, y: entry.data.rainfall})
  //       accumulatedRainfall.push({x: utcDate, y: totalRainfall})
  //     }


  //     //Collate accumulation for forecasted rain
  //     let fa = accumulatedRainfall[accumulatedRainfall.length - 1].y
  //     const forecastAccumulation = []

  //     for (let entry of forecast) {
  //       fa += entry.y

  //       forecastAccumulation.push({x: entry.x, y: fa})
  //     }

  //     const chartData = {
  //       "pastRainfall" : pastRainfall,
  //       "accumulatedRainfall" : accumulatedRainfall,
  //       "forecastRain" : forecast,
  //       "forecastAccumulation" : forecastAccumulation
  //     }

  //     console.log('Finished assembling chart data')
  //     console.log(chartData)

  //     onData(null, {chartData, stationID})


  // }

}

export default composeAll(
  composeWithTracker(DSSMapChartRedux),
  useDeps(deps)
)(RainChartWithForecast);