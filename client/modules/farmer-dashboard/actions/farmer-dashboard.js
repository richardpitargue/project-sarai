export default {
    addIrrigation(context, plantingSeasonId, amount, date) {
        const {Meteor} = context;

        Meteor.call('addIrrigation', plantingSeasonId, amount, date, (err, res) => {
            if(err) {
                console.error(err);
            }
        });
    },
    addPlantingSeason(context, crop, variety, startDate, targetEndDate) {
        const {Meteor} = context;

        const userId = 'FppLeCMyWNku2iiX2'; // this is currently hard coded!! change this

        Meteor.call('addPlantingSeason', userId, crop, variety, startDate, targetEndDate, (err, res) => {
            if(err) {
                console.error(err);
            }
        });
    }
}