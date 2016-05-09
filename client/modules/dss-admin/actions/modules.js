export default {

  addModule(context, module) {
    const {FlowRouter} = context


    Meteor.call('DSS.insertWeatherData', newRecord, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        // console.log(res);
        //FlowRouter.go('/dss/admin/modules')
      }
    })
  }
}