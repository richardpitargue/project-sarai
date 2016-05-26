// Will be part of Version 1.2
import {Mongo} from 'meteor/mongo';

const DSSSettings = new Mongo.Collection('dss-settings');

DSSSettings.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

DSSSettings.methods = {};

export default DSSSettings;
