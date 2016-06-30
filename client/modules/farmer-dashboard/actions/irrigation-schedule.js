export default {
    addIrrigation(context, plantingSeasonId, amount, date) {
        const {Meteor} = context;

        const userId = 'AQDE3kwC4ShoephSm'; // this is currently hard coded!! change this

        Meteor.call('addIrrigation', plantingSeasonId, amount, date, (err, res) => {
            if(err) {
                console.error(err);
            }
        });
    }
}