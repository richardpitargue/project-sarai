import React from 'react';

import {SectionList} from '/client/modules/ui-components';
import {CoreRootTriSection} from '/client/modules/core';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import DSSMapChart from './dss-map-chart';

const composerLandingPage = ({context}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherStations, Labels, WeatherData} = Collections;

  const sections = [];
  const spacing = false;

  const stationID = FlowRouter.getQueryParam('stationID') && FlowRouter.getQueryParam('stationID').trim() !== '' ? FlowRouter.getQueryParam('stationID') : '';

  if (Meteor.subscribe('weather-stations').ready()
    && Meteor.subscribe('labels').ready() && Meteor.subscribe('weather-data').ready()
    ) {

    const stations = WeatherStations.find().fetch();
    const plantingDateOptions = Labels.findOne({name: "YC_PlantingDateOptions"});

    //If StationID is provided, use it to get data
    if (stationID !== '') {
      const forecastRain = []
      //const forecastTemp = []

      //Get 10-day Forecast (rain And Temps)
      $.getJSON(
      `http:\/\/api.wunderground.com/api/9470644e92f975d3/forecast10day/q/pws:${stationID}.json`,
      (data) => {

        //Collate forecasted rain
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


        sections.push(React.createElement(DSSMapChart, {stations,
          plantingDateOptions,
          chartData
        }));

        onData(null, {sections, spacing});
      })
    }

    //If StationID is not provided, don't pass any weather data. Page will display instructions instead.
    else {
      sections.push(React.createElement(DSSMapChart, {stations,
          plantingDateOptions
        }));

        onData(null, {sections, spacing});
    }


  }

};

export default composeAll(
  composeWithTracker(composerLandingPage),
  useDeps()
)(SectionList);