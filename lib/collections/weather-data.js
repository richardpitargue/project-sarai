import {Mongo} from 'meteor/mongo';

const WeatherData = new Mongo.Collection('weather-data');

WeatherData.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

WeatherData.methods = {};

export default WeatherData;