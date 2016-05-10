import {Mongo} from 'meteor/mongo';

const DSSModules = new Mongo.Collection('dss-modules');

DSSModules.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

DSSModules.methods = {};

export default DSSModules;
