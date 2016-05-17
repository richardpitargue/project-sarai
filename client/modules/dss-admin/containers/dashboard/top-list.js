import React from 'react';

import {useDeps, composeAll, composeWithTracker} from 'mantra-core';

import TopList from './../../components/dashboard/top-list.jsx'

const composeChart = ({context, compareValue, compareOp, range, valueLabel}, onData) => {
  const {Meteor, Collections, FlowRouter} = context();
  const {WeatherData, WeatherStations} = Collections

  if (Meteor.subscribe('weather-data').ready()) {

    const stations = WeatherStations.find({}).fetch()

    //set limit according to range
    const limit = (range == '30_DAYS') ? 30 : (range == '10_DAYS') ? 10 : 30

    let records = []
    let index = 0

    //GET RECORDS
    for (let station of stations) {
      const id = station.id
      records.push({
        id,
        label: station.label,
        data: []
      })

      const date = new Date();
      let y = date.getFullYear();
      let m = date.getMonth();
      let d = date.getDate();

      while (records[index].data.length < limit) {
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

        const r = WeatherData.findOne({
          id,
          date: {
            year: y,
            month: m,
            day: d
          }
        })

        switch (compareValue) {
          case 'RAINFALL':
            records[index].data.push(r.data.rainfall)
            break

          default:
            break
        }
      }

      index += 1
    }

    const items = []

    //COMPARE RECORDS
    for (let stationRecords of records) {
      let runningValue = 0

      for (let value of stationRecords.data) {
        switch(compareOp) {
          case 'CUMULATIVE':
            runningValue += value
            break
          default:
            break
        }
      }

      items.push({
        id: stationRecords.id,
        label: stationRecords.label,
        runningValue: Math.round(runningValue*100)/100
      })
    }

    //should have sort parameter
    const sort = 'HIGHEST'
    let sortedItems = items

    switch(sort) {
      case 'HIGHEST':
        sortedItems = items.sort((a, b) => {
          if (a.runningValue > b.runningValue) {
            return -1
          } else if (a.runningValue < b.runningValue) {
            return 1
          } else {
            return 0
          }
        })
        break
      case 'LOWEST':
        sortedItems = items.sort((a, b) => {
          if (a.runningValue < b.runningValue) {
            return -1
          } else if (a.runningValue > b.runningValue) {
            return 1
          } else {
            return 0
          }
        })
        break

      default:
        break
    }


    onData(null, {items: sortedItems, valueLabel})

  }

};

export default composeAll(
  composeWithTracker(composeChart),
  useDeps()
)(TopList);