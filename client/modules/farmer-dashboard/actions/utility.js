export default {
    selectPlantingSeason(context, plantingSeasonId) {
        const {FlowRouter} = context;

        FlowRouter.go('/waiss/' + plantingSeasonId);
    },
    formatDate(context, date) {
        const theDate = new Date(date);
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];
        const month = theDate.getMonth();
        const day = theDate.getDate().toString().slice(0,1) == '0' ? theDate.getDate().toString().slice(1) : theDate.getDate();
        const year = theDate.getFullYear();
        
        return months[month] + ' ' + day + ', ' + year;
    }
}