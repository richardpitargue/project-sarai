import {Mongo} from 'meteor/mongo';

const PlantingSeasons = new Mongo.Collection('planting-seasons');

PlantingSeasons.methods = {
    updateIrrigation: (id, amount, date) => {
        const plantingSeason = PlantingSeasons.find({_id: id});
        let irrigationSchedule = plantingSeason.irrigationSchedule;

        if(!irrigationSchedule) {
            irrigationSchedule = [];
        }

        irrigationSchedule.push({
            date,
            amount
        });

        PlantingSeasons.update({id}, {$set: {irrigationSchedule}});
    }
};

export default PlantingSeasons;