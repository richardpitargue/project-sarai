import React from 'react';
import {useDeps, composeAll, composeWithTracker} from 'mantra-core';
import math from 'mathjs';

import YieldCalculator from './../../components/modules/yield-calculator.jsx'

const deps = (context, actions) => ({
  context: () => context
})

const composer = ({context}, onData) => {
  const {Collections, dssStore} = context()
  const {YieldFormulas, WeatherData, WeatherStations} = Collections

  onData(null, {})

  if (Meteor.subscribe('yield-formulas').ready()
      && Meteor.subscribe('weather-data').ready()
      && Meteor.subscribe('weather-stations').ready()) {
    return dssStore.subscribe(() => {
      const {stationID} = dssStore.getState()


      //Get data to autofill form with
      const records = WeatherData.find({id: stationID}, {sort: {dateUTC: -1}, limit: 7}).fetch()

      let maxTemperature = 0
      let minTemperature = 0
      let rainfall = 0

      for (let record of records) {
        maxTemperature += record.data.temp.max
        minTemperature += record.data.temp.min
        rainfall += record.data.rainfall
      }

      maxTemperature = Math.round((maxTemperature / 7) * 100) / 100
      minTemperature = Math.round((minTemperature / 7) * 100) / 100
      rainfall = Math.round((rainfall / 7) * 100) / 100

      //Get Formula
      const formulas = YieldFormulas.find({yearClassification: 'Dry'}).fetch()
      const station = WeatherStations.findOne({id: stationID})
      const point1 = station.coords
      let closestFormula = null
      let distance = 100000

      for (let formula of formulas) {
        //compute euclidian distance
        const point2 = formula.location.coords

        const exp = 'sqrt((a1 - b1)^2 + (a2 - b2)^2)'
        const scope = {
          a1: point1[0],
          a2: point1[1],
          b1: point2[0],
          b2: point2[1]
        }
        const ed = math.eval(exp, scope)

        if (ed < distance) {
          distance = ed
          closestFormula = formula
        }
      }

      onData(null, {station, maxTemperature, minTemperature, rainfall, closestFormula})
    })
  }

}

export default composeAll(
  composeWithTracker(composer),
  useDeps(deps)
)(YieldCalculator);