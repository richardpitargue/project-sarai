import {DSSModules} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

Meteor.publish('dss-modules', () => {
  return DSSModules.find();
});
