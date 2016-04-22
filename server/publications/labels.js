import {Labels} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('labels', () => {
  return Labels.find();
});