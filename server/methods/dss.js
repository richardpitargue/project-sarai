import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';
import {WeatherData, WeatherStations, DSSModules} from '/lib/collections';
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

  'DSS.insertWeatherStation': (station) => {
    if (adminAuthenticate) {
      return WeatherStations.insert(station)
    }
    throw new Meteor.Error('Not authorized')
  },

  'DSS.updateWeatherStation': (id, updatedStation) => {
    if (adminAuthenticate) {
      return DSSModules.update(
        { _id: id },
        updatedStation,
        { upsert: true }
      )
    }
    throw new Meteor.Error('Not authorized')
  },

  'DSS.deleteWeatherStation': (id) => {
    if (adminAuthenticate) {
      return WeatherStations.remove({_id: id})
    }
    throw new Meteor.Error('Not authorized')
  }
});