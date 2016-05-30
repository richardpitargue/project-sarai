import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';
import {WeatherData, WeatherStations, DSSModules, YieldFormulas} from '/lib/collections';
import adminAuthenticate from '/server/lib/admin-authenticate';

Meteor.methods({
  'DSS.insertWeatherData': (record) => {
    if (adminAuthenticate) {
      return WeatherData.update(
        {
          id: record.id,
          date: record.date
        },
        record,
        { upsert: true }
      )
    }

    throw new Meteor.Error('Not authorized');
  },

  'DSS.insertModule': (module) => {

    if (adminAuthenticate) {
      return DSSModules.insert(module)
    }

    throw new Meteor.Error('Not authorized')
  },

  'DSS.updateModule': (id, updatedModule) => {

    if (adminAuthenticate) {
      return DSSModules.update(
        { _id: id },
        updatedModule,
        { upsert: true }
      )
    }
    throw new Meteor.Error('Not authorized')
  },

  'DSS.deleteModule': (id) => {
    if (adminAuthenticate) {
      return DSSModules.remove({_id: id})
    }

    throw new Meteor.Error('Not authorized')
  },


  //---------WEATHER STATIONS----------------
  'DSS.insertWeatherStation': (station) => {
    if (adminAuthenticate) {
      return WeatherStations.insert(station)
    }
    throw new Meteor.Error('Not authorized')
  },

  'DSS.updateWeatherStation': (_id, updatedStation) => {
    if (adminAuthenticate) {
      return WeatherStations.update(
        { _id: _id },
        updatedStation,
        { upsert: true }
      )
    }
    throw new Meteor.Error('Not authorized')
  },

  'DSS.deleteWeatherStation': (_id) => {
    if (adminAuthenticate) {
      return WeatherStations.remove({_id: _id})
    }
    throw new Meteor.Error('Not authorized')
  },

  'DSS.insertYieldFormula': (yieldFormula) => {
    if (adminAuthenticate) {
      return YieldFormulas.insert(yieldFormula)
    }
    throw new Meteor.Error('Not authorized')
  },

  'DSS.updateYieldFormula': (_id, updatedYieldFormula) => {

    if (adminAuthenticate) {
      return YieldFormulas.update(
        { _id: _id },
        updatedYieldFormula,
        { upsert: true}
      )
    }
    throw new Meteor.Error('Not authorized')
  },

  'DSS.deleteYieldFormula': (_id) => {
    if (adminAuthenticate) {
      return YieldFormulas.remove({_id: _id})
    }
    throw new Meteor.Error('Not authorized')
  }

});