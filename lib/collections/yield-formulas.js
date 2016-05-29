// Will be part of Version 1.2
import {Mongo} from 'meteor/mongo';

const YieldFormulas = new Mongo.Collection('yield-formulas');

YieldFormulas.deny({
  insert: () => true,
  update: () => true,
  remove: () => true
});

YieldFormulas.methods = {};

export default YieldFormulas;
