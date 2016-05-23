import {DSSSettings} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('dss-settings', () => {
  return DSSSettings.find();
});