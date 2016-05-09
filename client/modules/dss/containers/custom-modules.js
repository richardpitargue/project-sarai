import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import RainGraph from './../components/rain-graph.jsx';
import MinRainAdvisory from './../components/min-rain-advisory.jsx';
import TwoColumnSection from './../components/two-column-section.jsx';

const deps = (context, actions) => ({
  context: () => context
})

const TCSRedux = ({context}, onData) => {
  const {Meteor, Collections, dssStore} = context()
  const {WeatherData, DSSModules} = Collections
  onData(null, {})

  if (Meteor.subscribe('weather-data').ready()
      && Meteor.subscribe('dss-modules').ready()) {
    return dssStore.subscribe(() => {
      const {forecast, stationID} = dssStore.getState()

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

            if ([0, 2, 4, 6, 7, 9].indexOf(m) > -1) {
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

      //console.log(records)

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

      const sections = []

      const rainGraph = React.createElement(RainGraph, {chartData, stationID})
      sections.push(rainGraph)

      const modules = DSSModules.find().fetch()

      for (let module of modules) {
        if (module.type === "MIN_RAIN_ADVISORY") {
          let dateOfSufficientRain = -1

          for (let entry of pastRainfall) {
            if (entry.y >= module.data.minimumRainfall) {
              dateOfSufficientRain = Date.UTC(entry.x)
            }
          }

          if (dateOfSufficientRain != -1) {
            //Go through the forecast
            for (let entry of forecastAccumulation) {
              if (entry.y >= module.data.minimumRainfall) {
                dateOfSufficientRain = Date.UTC(entry.x)
              }
            }
          }

          const m = React.createElement(MinRainAdvisory, {data: module.data, dateOfSufficientRain})

          sections.push(m)
        }
      }


      // const minRainAdvisory = React.createElement(MinRainAdvisory, {minimumRainfall, dateOfSufficientRain})


      onData(null, {sections})
    })
  }
}

export default composeAll(
  composeWithTracker(TCSRedux),
  useDeps(deps)
)(TwoColumnSection);