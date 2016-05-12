import {Meteor} from 'meteor/meteor';

export default {

  insertMRAModule(context, id, type, title, minRain, m1, m2, m3) {
    const {FlowRouter} = context

    //make callback uniform
    const module = {
      "type": type,
      "title": title,
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
        FlowRouter.go('/dss/admin/modules')
      }
    })

  },

  updateMRAModule(context, id, type, title, minRain, m1, m2, m3) {
    const {FlowRouter} = context

    const module = {
      "type": 'MIN_RAIN_ADVISORY',
      "title": title,
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

    Meteor.call('DSS.updateModule', id, module, (err, res) => {
      if (err) {
        console.error(err)
      } else {
        FlowRouter.go('/dss/admin/modules')
      }
    })
  },

  deleteModule(context, id) {

    Meteor.call('DSS.deleteModule', id, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        //nothing
      }
    })
  },

  setFormModeAdd(context) {
    const {FlowRouter, dssAdminStore} = context

    dssAdminStore.dispatch({
      type: 'SET-FORM-MODE',
      formMode: 'ADD'
    })

    FlowRouter.go('/dss/admin/modules/add')
  },

  setFormType(context, formType) {
    const {dssAdminStore} = context

    dssAdminStore.dispatch({
      type: 'SET-MODULE-FORM-TYPE',
      moduleFormType: formType
    })
  },

  setModuleToEdit(context, moduleID) {
    const {FlowRouter, dssAdminStore} = context

    dssAdminStore.dispatch({
      type: 'SET-FORM-MODE',
      formMode: 'EDIT'
    })

    dssAdminStore.dispatch({
      type: 'SET-MODULE-ID',
      moduleID
    })

    FlowRouter.go('/dss/admin/modules/edit')
  }

}