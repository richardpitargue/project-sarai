import {Mongo} from 'meteor/mongo';

const PlantingSeasons = new Mongo.Collection('planting-seasons');

Meteor.methods({
    addIrrigation: (_id, amount, date) => {
        const plantingSeason = PlantingSeasons.find({_id}).fetch()[0];
        let irrigationSchedule = plantingSeason.irrigationSchedule;

        if(!irrigationSchedule) {
            irrigationSchedule = [];
        }

        irrigationSchedule.push({
            date: date.toDateString(),
            amount
        });

        PlantingSeasons.update({_id}, {
            $set: {
                irrigationSchedule
            }
        }, {
            upsert: false
        });
    },
    addPlantingSeason: (farmerId, crop, variety, startDate, targetEndDate) => {
        PlantingSeasons.insert({
            farmerId,
            crop,
            variety,
            startDate: startDate.toDateString(),
            targetEndDate: targetEndDate.toDateString()
        });
    }
});

export default PlantingSeasons;