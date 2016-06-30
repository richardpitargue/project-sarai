import {FarmerData} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('farmers', (id) => {
    check(id, String);
    return FarmerData.find({id});
});