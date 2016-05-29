import {YieldFormulas} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('yield-formulas', () => {
  return YieldFormulas.find();
});