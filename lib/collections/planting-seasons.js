import {Mongo} from 'meteor/mongo';

const PlantingSeasons = new Mongo.Collection('planting-seasons');

Meteor.methods({
    addIrrigation: (id, amount, date) => {
        const plantingSeason = PlantingSeasons.find({
            '_id': id
        }).fetch()[0];
        let irrigationSchedule = plantingSeason.irrigationSchedule;

        if(!irrigationSchedule) {
            irrigationSchedule = [];
        }

        irrigationSchedule.push({
            date: date.toDateString(),
            amount
        });

        PlantingSeasons.update({
            '_id': id
        }, {
            $set: {
                irrigationSchedule
            }
        }, {
            upsert: false
        });
    },
    addPlantingSeason: (crop, variety, startDate, targetEndDate) => {
        PlantingSeasons.insert({
            crop,
            variety,
            startDate: startDate.toDateString(),
            targetEndDate: targetEndDate.toDateString()
        });
    }
});

export default PlantingSeasons;