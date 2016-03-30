import {Mongo} from 'meteor/mongo';

const Labels = new Mongo.Collection('labels');

Labels.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

Labels.methods = {};

export default Labels;