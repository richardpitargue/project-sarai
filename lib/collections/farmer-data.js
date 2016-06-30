import {Mongo} from 'meteor/mongo';

const FarmerData = new Mongo.Collection('farmer-data');

FarmerData.deny({
    insert: () => false,
    update: () => false,
    remove: () => true
});

FarmerData.methods = {};

export default FarmerData;