export default {

  goToEditPage(context, formulaID) {
    const {dssAdminStore, FlowRouter} = context

    dssAdminStore.dispatch({
      type: 'SET-FORMULA-ID',
      formulaID
    })

    FlowRouter.go('/dss/admin/yield-calculator/edit')
  },

  goToAddPage(context) {
    const {FlowRouter} = context

    FlowRouter.go('/dss/admin/yield-calculator/add')
  },

  addYieldFormula(context, _id, crop, variety, yearClassification, label, coords0, coords1, expression) {
    const {FlowRouter} = context

    const newRecord = {
      crop,
      variety,
      yearClassification,
      "location": {
        "label": label,
        "coords": [parseFloat(coords0), parseFloat(coords1)]
      },
      expression
    }

    Meteor.call('DSS.insertYieldFormula', newRecord, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        FlowRouter.go('/dss/admin/yield-calculator')
      }
    })
  },

  editYieldFormula(context, _id, crop, variety, yearClassification, label, coords0, coords1, expression){
    const {FlowRouter} = context

    const updatedRecord = {
      crop,
      variety,
      yearClassification,
      "location": {
        "label": label,
        "coords": [parseFloat(coords0), parseFloat(coords1)]
      },
      expression
    }

    console.log('updating')
    console.log(updatedRecord)

    Meteor.call('DSS.updateYieldFormula', _id, updatedRecord, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        FlowRouter.go('/dss/admin/yield-calculator')
      }
    })
  },

  deleteYieldFormula(context, _id) {
    Meteor.call('DSS.deleteYieldFormula', _id, (err, res) => {
      if (err) {
        console.log(err)
      } else {
        FlowRouter.go('/dss/admin/yield-calculator')
      }
    })
  }
}