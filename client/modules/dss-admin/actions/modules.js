import {Meteor} from 'meteor/meteor';

export default {

  insertMRAModule(context, type, minRain, m1, m2, m3) {
    const {FlowRouter} = context

    const module = {
      "type": type,
      "data": {
        "minimumRainfall": parseInt(minRain),
        "messages": [
          {
            "condition": "MET",
            "message": m1
          },
          {
            "condition": "MET_FORECAST",
            "message": m2
          },
          {
            "condition": "NOT_MET",
            "message": m3
          }
        ]
      },
      "enabled": true
    }

    Meteor.call('DSS.insertModule', module, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        // console.log(res);
        FlowRouter.go('/dss/admin/modules')
      }
    })

  },

  setFormType(context, formType) {
    const {dssAdminStore} = context

    dssAdminStore.dispatch({
      type: 'SET-MODULE-FORM-TYPE',
      moduleFormType: formType
    })
  }

}