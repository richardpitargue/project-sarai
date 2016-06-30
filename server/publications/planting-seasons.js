import {PlantingSeasons} from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

Meteor.publish('planting-seasons', (farmerId) => {
    check(farmerId, String);
    return PlantingSeasons.find({farmerId});
});