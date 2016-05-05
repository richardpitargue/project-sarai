import {Meteor} from 'meteor/meteor';
// import {check} from 'meteor/check';
import {WeatherData} from '/lib/collections';
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
  }
});