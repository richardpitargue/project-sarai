export default {
    selectPlantingSeason(context, plantingSeasonId) {
        const {FlowRouter} = context;

        FlowRouter.go('/farmer/' + plantingSeasonId);
    }
}