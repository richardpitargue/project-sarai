import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';
import {WeatherData} from '/lib/collections';
import adminAuthenticate from '/server/lib/admin-authenticate';

Meteor.methods({
  'DSS.insertWeatherData': (date, data) => {
    //check stuff here

    // if (adminAuthenticate) {
    // return WeatherData.upsert({
    //   id: 'SAMPLE',
    //   date: {
    //     year: 2016,
    //     month: 12,
    //     day: 12
    //   },
    //   data: {
    //     rainfall: 0
    //   }
    // })
    // }

    console.log('Method: Insert Weather')

    return 'result from method'
    // throw new Meteor.Error('Not authorized');
  }
});